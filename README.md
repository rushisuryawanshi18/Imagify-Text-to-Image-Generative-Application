# 🖼️ Imagify AI Text-to-Image Generator

An AI-powered Text-to-Image Generator built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js) using the **Clipdrop API**. Enter any text prompt and watch the AI bring your imagination to life with realistic images.

## 🚀 Features

- ✨ Convert any text prompt into stunning AI-generated images
- 🌐 Built with a full-stack MERN architecture
- ⚡ Uses Clipdrop's powerful image generation API
- 💾 Save generated images to the database (if implemented)
- 🔁 View and manage your prompt history (if implemented)

## 🛠️ Tech Stack

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **API Integration**: [Clipdrop API](https://clipdrop.co/apis)



**Backend Setup**
cd frontend
npm install
npm start

 **Environment Variables**
 In the backend/.env file, include:

 CLIPDROP_API_KEY = your_clipdrop_api_key
MONGODB_URI = your_mongodb_connection_string
PORT = 5000

✍️ **How It Works**
User inputs a text prompt on the frontend.

The backend receives the request and forwards it to Clipdrop API.

The generated image is returned and displayed on the frontend.

(Optional) Image and prompt history can be saved to MongoDB.


📂 **Folder Structure**
├── frontend/
│   └── React frontend
├── backend/
│   └── Express server with API routes
├── README.md
