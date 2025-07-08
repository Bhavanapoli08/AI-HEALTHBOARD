# AI-Based Healthcare Monitoring System using IoT

### 🚑 An Intelligent IoT + NLP-powered Healthcare System with Smart Band, Mobile App & BioGPT Chatbot

---

## 📌 Project Description

The **AI-Based Healthcare Monitoring System using IoT and NLP** is an integrated platform combining:

- A **smart band** to collect real-time vitals  
- A **mobile application** built with **Kotlin and Java**  
- A **BioGPT-powered medical chatbot** for symptom-based query answering and assistance

The system facilitates real-time monitoring, remote consultations, symptom tracking, and intelligent medical support through natural language understanding.

---

## 🎥 Check Our Demo, Presentation & Documentation

| Demo | Presentation | Documentation |
|------|--------------|----------------|
| 🚧 (Coming Soon) | 🚧 (Coming Soon) | 🚧 (Coming Soon) |

---

## 🏆 Achievements

- 🎓 **Graduation Project Score:** A+ (99/100)
- 💡 **Dell Technologies – Envision the Future 2023:** Semifinalist (out of 283 global teams)
- 🇪🇬 **Egypt IoT & AI Challenge:** Participated with sponsorship (financial + technical)

---

## 🧩 Project Overview

### 1. 📱 Mobile Application – HealTech

A full-featured Android mobile app developed in **Kotlin and Java**, with separate portals for patients and doctors.

#### 👩‍⚕️ Patient Portal Features:
- **Schedule Meeting:** Book appointments with doctors
- **Join Meetings:** Remote video consultation
- **Daily Symptom Tracking:** Log symptoms for continuous monitoring
- **Medical History:** Track diagnoses, vitals & medications
- **Medical Chatbot:** BioGPT-based assistant for medical queries

#### 👨‍⚕️ Doctor Portal Features:
- **Access Complete Patient History:** Diagnosis, vitals, medications
- **Schedule Management:** Manage availability
- **Remote Consultations:** Join patient meetings with live data
- **Critical Alerts:** Get notified of emergency vitals
- **Medical Chatbot:** Assistant for medical Q&A during sessions

#### 🔐 API Used in App
```kotlin
val API_URL = "https://api-inference.huggingface.co/models/Amira2045/BioGPT-Finetuned"
val headers = mapOf("Authorization" to "Bearer USER_TOKEN")

📲 Technologies Used:
Android Studio (IDE)

Kotlin, Java, XML

MySQL, PHP

OkHttp, Volley

Architecture: LiveData, ViewModel, Navigation

Espresso, JUnit, AppCompat

2. 🤖 Medical Chatbot – BioGPT PubMedQA Prefix-Tuning
A fine-tuned BioGPT-Large model (1.5B parameters) deployed as a chatbot to answer medical questions based on symptoms and PubMed literature.

🔬 Dataset
PubMedQA: Biomedical QA dataset with expert-labeled and generated answers.

⚙️ Fine-Tuning Details
Model: BioGPT-Large (based on GPT-2 XL)

Prefix Tuning: Soft prompt tuning with PEFT & LoRA

Training: 3 epochs, TPU VM v3-8, 1.5M trainable params

Results:

Model	Loss	Perplexity
BioGPT-Large (base)	12.37	237016.3
BioGPT-PubMedQA-Prefix-Tuned	9.20	1350.9

☁️ Deployment
Model hosted on Hugging Face

Integrated into mobile app via REST API

🧪 Technologies Used
Python, PyTorch, Transformers

PEFT, LoRA, HuggingFace Hub

Torch XLA, Sacremoses, Datasets, TQDM

IDE: Kaggle Notebook


3. ⌚ Smart Band – Real-Time Vital Monitoring
A custom-built smart band using Arduino Nano, connected via ESP8266 Wi-Fi module, and developed using Arduino C/C++.

It collects:

Heart Rate

Body Temperature

Blood Pressure

Oxygen Saturation

🔧 Hardware:
Sensors: Max30100, LM35, BMP180

Microcontroller: Arduino Nano

Wi-Fi Module: ESP8266

Display: TFT ST7789V

🧑‍💻 Software:
Arduino IDE

C, C++

LCDWIKI GUI / LCDWIKI KBV

ESP8266WiFi, MySQL_Connection, MySQL_Cursor

🔗 Data Flow:
Smart band sends vitals via ESP8266 to backend DB

Stored in MySQL DB using PHP

Mobile app fetches & displays in real time

📁 Repository Structure
graphql
Copy
Edit
AI-HEALTHBOARD/
│
├── backend/                   # Node.js Backend APIs
├── dashboard/                # React Doctor Dashboard
├── biogpt_chatbot_model/     # BioGPT Fine-tuned Model Code
├── Mobile_Application-HealTech/  # Android App in Kotlin/Java
│
├── README.md
├── package-lock.json

🛠 Technologies Used
Category	Technologies
Mobile Development	Android Studio, Kotlin, Java, XML, XML, Gson
Backend	Node.js, PHP, MySQL
IoT Hardware	Arduino Nano, ESP8266, C/C++, Proteus
AI/NLP	Python, PyTorch, Hugging Face, BioGPT
API & Deployment	Hugging Face Inference API
Testing	JUnit, Espresso, LiveData, ViewModel

