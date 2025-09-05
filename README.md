# ChatX

**ChatX** is a real-time chat application built with the MERN stack. It allows users to sign up, log in, chat in real-time, and see online users instantly.

---

## 🌟 Features

* User authentication with JWT (signup & login)
* Real-time messaging using Socket.io
* Online user status
* Profile management (update info and avatar)
* Global state management with Zustand
* Responsive UI with TailwindCSS & DaisyUI

---

## 🛠️ Tech Stack

* **Frontend:** React, TailwindCSS, DaisyUI, Zustand
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Real-time Communication:** Socket.io
* **Authentication:** JWT

---

## 🚀 Getting Started

1. **Clone the repository:**

```bash
git clone https://github.com/rohit-err/chatx-chat-app.git
cd ChatX
```

2. **Install dependencies:**

```bash
# Server
cd backend
npm install

# Client
cd ../frontend
npm install
```

3. **Create a `.env` file in the backend folder:**

```env
PORT=5001
MONGODB_URI="your_mongodb_connection_string"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"
CLOUDINARY_CLOUD_NAME="your_cloudinary_cloud_name"
JWT_SECRET="your_jwt_secret"
NODE_ENV=development
```

4. **Run the application:**

```bash
# Start server
cd backend
npm run dev

# Start client
cd ../frontend
npm start
```

---

## 📚 Project Structure

```
ChatX/
├─ frontend/       # React frontend
├─ backend/        # Node.js backend
└─ README.md
```

---

## 📌 License

This project is **MIT licensed**.

---

## 👤 Author
Made with ❤️ by [rohit-err](https://github.com/rohit-err)


