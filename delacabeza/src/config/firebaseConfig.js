import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyA7__Wzx-uZbVTYfSBZ2bqmNn3dpOFmBJs",
    authDomain: "delacabeza-f85b0.firebaseapp.com",
    projectId: "delacabeza-f85b0",
    storageBucket: "delacabeza-f85b0.appspot.com",
    messagingSenderId: "337795361113",
    appId: "1:337795361113:web:23384e8588ee0bd340c448"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Exportamos la base de datos a toda nuestra app
export const db = getFirestore(app)

