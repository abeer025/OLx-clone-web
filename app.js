// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref , push } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1qsMBDz4OqsodrjQ1T4lJoCFfXUSYYOE",
  authDomain: "clone-olx-web.firebaseapp.com",
  projectId: "clone-olx-web",
  storageBucket: "clone-olx-web.appspot.com",
  messagingSenderId: "461649949741",
  appId: "1:461649949741:web:2ec9880cd4f4eec3d734a4",
  measurementId: "G-8Z74PZ2XGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();