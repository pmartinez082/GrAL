import * as u from "./user.js";

let isLogin = true;
export function toggleLogin() {
  isLogin = !isLogin;
  const formTitle = document.getElementById('formTitle');
  const role = document.getElementById('role');
  const email = document.getElementById('email');
  const toggleButton = document.getElementById('toggle-button');
  if (isLogin) {
    formTitle.textContent = 'Sesioa hasi';
    toggleButton.innerHTML = 'Ez duzu konturik? Erregistratu zaitez';
    email.setAttribute('hidden', '');
    role.setAttribute('hidden', '');  
    role.removeAttribute('required');
    email.removeAttribute('required');
    document.getElementById("radmin").setAttribute('hidden', '');
    document.getElementById("repaile").setAttribute('hidden', '');
  } 
  
  else {
    formTitle.textContent = 'Erregistratu';
    toggleButton.innerHTML = 'Badaukazu konturik? Sesioa hasi';
    role.removeAttribute('hidden');
    email.removeAttribute('hidden');
    email.setAttribute('required', '');
    role.setAttribute('required', '');
    role.removeAttribute('hidden');
    document.getElementById("radmin").removeAttribute('hidden');
    document.getElementById("repaile").removeAttribute('hidden');

  }
}

export async function login(event) {
    event.preventDefault();
    const authForm = document.getElementById('authForm');
    
    if (isLogin) {
      
      const verify = await u.verifyUser();
      if(!verify){
        
        logDiv.innerHTML = "";
        const mezua = document.createElement('h1');
        mezua.textContent = ` ${document.getElementById('username').value} erabiltzailea ez dago erregistratuta edo pasahitza ez da zuzena`;
        authForm.reset();
        logDiv.appendChild(mezua);
        return;
      }
    else{  
    logDiv.innerHTML = "";
    bideratu();
    }
    } else {
        logDiv.innerHTML = "";
        const user = await u.findUser();
        if(user){
            
            logDiv.innerHTML = "";
            const mezua = document.createElement('h1');
            mezua.textContent = ` ${document.getElementById('username').value} izenarekin erabiltzailea existitzen da`;
            authForm.reset();
            logDiv.appendChild(mezua);
            return;
        }
        else{
        await u.createNewUser();
        bideratu();
        }
    }
    
    authForm.reset();
}



 async function bideratu(){
  const role = await u.getRole();
  if(role == "admin"){
      window.location.href = "admin/admin.html";
        
  }
  else{
      window.location.href = "epaile/epaitu.html";
  }
  
 }

 export const logout = async () => {
  localStorage.removeItem('token');
  window.location.href = 'index.html';
};







