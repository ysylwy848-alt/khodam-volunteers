// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAIPtPhuba3jRfP6bKDXD8BUF5w9YmW5B4",
  authDomain: "khodam-volunteers.firebaseapp.com",
  projectId: "khodam-volunteers",
  storageBucket: "khodam-volunteers.firebasestorage.app",
  messagingSenderId: "82704174117",
  appId: "1:82704174117:web:46a870c83e12e1e2c943cc",
  measurementId: "G-9G12FST104"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
