let isLogin = true;
var max;


  class user {
      constructor(username, email, password, role) {
          this.username = username;
          this.email = email;
          this.password = password;
          this.role = role;
      }
  }

  let users = [new user("user1", "user1@mail.com", "123","epailea"), new user("user2", "user2@mail.com", "456","epailea"),new user("administraria", "admin@mail.com", "456","admin")];;

function toggleLogin() {
  isLogin = !isLogin;
  const formTitle = document.getElementById('formTitle');
  const role = document.getElementById('role');
  const email = document.getElementById('email');
  const toggleButton = document.getElementById('toggleButton');
  if (isLogin) {
    formTitle.textContent = 'Sesioa hasi';
    toggleButton.textContent = 'Ez duzu konturik? Erregistratu zaitez';
    email.setAttribute('hidden', '');
    role.setAttribute('hidden', '');  
    role.removeAttribute('required');
    email.removeAttribute('required');
    document.getElementById("radmin").setAttribute('hidden', '');
    document.getElementById("repaile").setAttribute('hidden', '');
  } else {
    formTitle.textContent = 'Erregistratu';
    toggleButton.textContent = 'Badaukazu konturik? Sesioa hasi';
    role.removeAttribute('hidden');
    email.removeAttribute('hidden');
    email.setAttribute('required', '');
    role.setAttribute('required', '');
    role.removeAttribute('hidden');
    document.getElementById("radmin").removeAttribute('hidden');
    document.getElementById("repaile").removeAttribute('hidden');

  }
}

function submitLoginSignUp(event) {
    event.preventDefault();
    const authForm = document.getElementById('authForm');
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const role = document.getElementById('role').value;
    const logDiv = document.getElementById('logDiv');
    const user_ = new user(username,email, password, role);
    
    if (isLogin) {
      
      if(!findUSer(username, password)){
        authForm.reset();
        logDiv.innerHTML = "";
        const mezua = document.createElement('h1');
        mezua.textContent = ` ${username} erabiltzailea ez dago erregistratuta edo pasahitza ez da zuzena`;
        logDiv.appendChild(mezua);

        return;
      }
    logDiv.innerHTML = "";
    console.log(user_.username+`-ek sesioa hasi du`+user_.email+` epostarekin eta `+ user_.password+` pasahitzarekin`);
    
    } else {
        logDiv.innerHTML = "";
        users.push(user_);
        console.log(user_.username+` erregistratu da`+user_.email+` epostarekin eta `+ user_.password+` pasahitzarekin`);
    }
    
    authForm.reset();
}

 function findUSer(username, password){
  const authForm = document.getElementById('authForm');
     for (const u of users) {
        if(u.username == username){
            if(u.password == password){
                if(u.role == "admin"){
                  window.location.href = "admin/admin.html";
                    
                }
                else{
                  window.location.href = "epaile/epaitu.html";
                }
              return true;
              }
            else{
                return false;
            }
        }
         
      }

    return false;
 }  


   





