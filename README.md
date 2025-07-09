# 📊 Excel Analytics Platform

A full-stack web application that allows users to upload Excel files, view their data, and generate dynamic charts — with Google Sign-In using Firebase.

---

## 🚀 Features

- ✅ Google Authentication (via Firebase)
- 📂 Upload Excel files (`.xlsx`, `.xls`)
- 📊 Display data in a dynamic table
- 📈 Generate charts (bar, line, pie, etc.)
- 🧠 Optional AI integration (OpenAI) for insights
- 📦 MERN stack (MongoDB, Express, React, Node.js)

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Firebase (Google Auth)
- Chart.js / Three.js
- Tailwind CSS (optional)
- SheetJS (`xlsx`) for Excel parsing

### Backend
- Node.js, Express.js
- MongoDB (via Mongoose)
- Optional: OpenAI API

---

## 🖥️ Folder Structure

```
excel-analytics-platform/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.js
│   │   └── firebase.js
└── README.md
```

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/excel-analytics-platform.git
cd excel-analytics-platform
```

### 2. Install Frontend

```bash
cd frontend
npm install
npm start
```

### 3. Install Backend (Optional, if using MongoDB/API)

```bash
cd backend
npm install
npm run dev
```

> 🔐 Make sure to configure your `.env` file for backend.

---

## 🔑 Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Google Authentication**
4. Copy Firebase config to your `firebase.js`:

```js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-app.firebaseapp.com",
  // ...
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
```

---

## 🧪 Features in Progress

- [ ] Chart download (PNG/PDF)
- [ ] Admin dashboard
- [ ] AI summary generation using OpenAI
- [ ] User history tracking

---

## 🧑‍💻 Credits

Made with ❤️ by [Your Name]  
Inspired by StudioPress-style layouts and educational projects from JavaScript Mastery.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
