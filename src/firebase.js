import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCL23iaDxWrpyMDffd-ozfW98k9l8nipxA",
    authDomain: "exercise-app-5f998.firebaseapp.com",
    projectId: "exercise-app-5f998",
    storageBucket: "exercise-app-5f998.appspot.com",
    messagingSenderId: "749355355937",
    appId: "1:749355355937:web:356aa89ed71acd22bb3860",
    measurementId: "G-GL8G0GVJ8B",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
