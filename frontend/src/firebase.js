// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAwQQSHp-lNOAAiuuk-YnWVFZ7pR9qD8kE",
  authDomain: "excel-analytics-platforms.firebaseapp.com",
  projectId: "excel-analytics-platforms",
  storageBucket: "excel-analytics-platforms.appspot.com",  // fixed typo here
  messagingSenderId: "946647637190",
  appId: "1:946647637190:web:7549cb84fc9e356ca90bc7",
  measurementId: "G-CW0N4PTJFZ"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Set up Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Export for use in your app
export { auth, provider };
