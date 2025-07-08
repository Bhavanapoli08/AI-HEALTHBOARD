from flask import Flask, request, jsonify
from transformers import BioGptTokenizer, BioGptForCausalLM
import torch
import os

app = Flask(__name__)

# Load local BioGPT model
model_path = os.path.join(os.path.dirname(__file__), "biogpt_model")
tokenizer = BioGptTokenizer.from_pretrained(model_path, local_files_only=True)
model = BioGptForCausalLM.from_pretrained(model_path, local_files_only=True)

# Chat endpoint
@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_input = data.get("prompt", "")

    # Format prompt for BioGPT-style QA
    prompt = f"Question: {user_input}\nAnswer:"

    # Tokenize input and generate response
    inputs = tokenizer(prompt, return_tensors="pt")
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=50,
            do_sample=True,
            top_k=50,
            top_p=0.95,
            temperature=0.8
        )
    response = tokenizer.decode(outputs[0], skip_special_tokens=True)

    return jsonify({"response": response})

# Run the app
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002, debug=True)
