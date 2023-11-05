import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAupRMNm2JHD4iosuyI_XJO5IseZWfsg_A",
  authDomain: "ecommerce-proyecto-final-4c4b3.firebaseapp.com",
  projectId: "ecommerce-proyecto-final-4c4b3",
  storageBucket: "ecommerce-proyecto-final-4c4b3.appspot.com",
  messagingSenderId: "177236506122",
  appId: "1:177236506122:web:e33b93101e1bb9267251f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);