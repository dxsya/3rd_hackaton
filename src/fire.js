import firebase from "firebase/compat/app";

import "firebase/compat/app";
import "firebase/compat/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBQzFsP8av47vAj0Kz1Ov2Ouew9ZTh5tU0",
  authDomain: "adelyas-vibemakers.firebaseapp.com",
  projectId: "adelyas-vibemakers",
  storageBucket: "adelyas-vibemakers.appspot.com",
  messagingSenderId: "20570335564",
  appId: "1:20570335564:web:807e3d70173f901a0107e9",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
