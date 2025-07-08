const axios = require('axios');

// @desc    Get chatbot medical response
// @route   POST /api/chatbot
exports.getChatbotResponse = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  try {
    const response = await axios.post(
      process.env.BIOGPT_URL,
      {
        inputs: {
          text: message
        }
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const reply = response.data.generated_text || 'Sorry, I could not generate a response.';
    res.json({ reply });

  } catch (error) {
    console.error('Error fetching chatbot response:', error.message);
    res.status(500).json({ error: 'Failed to get response from chatbot API' });
  }
};

