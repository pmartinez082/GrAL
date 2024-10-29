

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyBSiSM_42iiE3qphpfLcwsSVgBSakH8UMY",
  
    authDomain: "froga-5fb67.firebaseapp.com",
  
    projectId: "froga-5fb67",
  
    storageBucket: "froga-5fb67.appspot.com",
  
    messagingSenderId: "926225404109",
  
    appId: "1:926225404109:web:9b1a8e4267f8771458d984"
  };
  

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const izenaInput = document.getElementById("iz");
const emailInput = document.getElementById("em");
const emaitza = document.getElementById("emaitza");
const passInput = document.getElementById("pass");
const form1 = document.getElementById("form1")


form1.addEventListener("submit", async function (event) {
    event.preventDefault();
    const izena = izenaInput.value;
    const email = emailInput.value;
    const passwd = passInput.value;
 

    try{
        await addDoc(collection(firestore, "users"),{
        username: izena,
        mail: email,
        password: passwd

    });
    }
    catch (error){
        console.log("Datuak ez dira ondo biltegiratu", error)
    }
    
   
    form1.reset();
    erakutsi();
});


async function erakutsi(){
    emaitza.innerHTML = "DBan gordetakoa"; 
    try {
        const querySnapshot = await getDocs(collection(firestore, "users"));
        querySnapshot.forEach((doc) => {
            const dato = doc.data();
            emaitza.innerHTML += `
                <div>username = ${dato.username}, mail = ${dato.mail}</div>
            `;
        });
    } catch (error) {
        console.error("Errorea datuak eskuratzean", error);
    }
}

document.addEventListener('DOMContentLoaded', erakutsi);


