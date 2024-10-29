let isLogin = true;
const lehiaketak = [];
const users = [];
class fasea {
    constructor(izena, ezaugarriak, epaileak) {
        this.izena = izena;
        this.ezaugarriak = ezaugarriak;
        this.epaileak = epaileak;

    }
};

class lehiaketa {
    constructor(data, lehiaketaIzena, faseKopurua, faseak) {
        this.data = data;
        this.lehiaketaIzena = lehiaketaIzena;
        this.faseKopurua = faseKopurua;
    }
};


class user {
    constructor(username, email, password, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}


function toggleLogin() {
  isLogin = !isLogin;
  const formTitle = document.getElementById('formTitle');
  const role = document.getElementById('role');

  const toggleButton = document.querySelector('.toggle-button');
  if (isLogin) {
    formTitle.textContent = 'Sesioa hasi';
    toggleButton.textContent = 'Ez duzu konturik? Erregistratu zaitez';
    role.style.display = 'none';
  } else {
    formTitle.textContent = 'Erregistratu';
    toggleButton.textContent = 'Badaukazu konturik? Sesioa hasi';
    role.style.display = 'block';



  }
}

function submitLoginSignUp(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const authForm = document.getElementById('authForm');
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const user_ = new user(username,email, password, role);
    users.push(user_);
    if (isLogin) {
    console.log(user_.username+`-ek sesioa hasi du`+user_.email+` epostarekin eta `+ user_.password+` pasahitzarekin`);
    } else {
        console.log(user_.username+`-ek erregistratu da`+user_.email+` epostarekin eta `+ user_.password+` pasahitzarekin`);
    }

    //alert(isLogin ? 'Erabiltzailea ondo logeatu da' : 'Erabiltzailea ondo erregistratu da');
    authForm.reset();
}

function lehiaketaSortu(event){
    event.preventDefault();
    const data = document.getElementById('data').value;
    const lehiaketaIzena = document.getElementById('lehiaketaIzena').value;
    const faseKopurua = document.getElementById('faseKopurua').value;
    const lehiaketaForm = document.getElementById('lehiaketaForm1');
    const lehiaketa_ = new lehiaketa(data, lehiaketaIzena, faseKopurua, null);
   
    const faseak = fasea[faseKopurua];
    console.log("Lehiaketa ondo sortu da: "+lehiaketa_.data +" "+ lehiaketa_.lehiaketaIzena +" "+ lehiaketa_.faseKopurua);
    lehiaketaForm.reset();
    faseakForm(lehiaketa_);
}

function faseakForm(lehiaketa_){
    const taulaContainer = document.getElementById('faseenTaula');
    const taula = document.createElement('table');
    const zutabe = taula.insertRow();
    const zb = zutabe.insertCell();
    const ezaugarriak = zutabe.insertCell();
    const epaileak = zutabe.insertCell();

    zb.textContent = "Fase zenbakia";
    ezaugarriak.textContent = "Ezaugarriak";
    epaileak.textContent = "Epaileak";
    
    for(let i = 1; i <= lehiaketa_.faseKopurua; i++){
        const lerroa = taula.insertRow();
        const fzb = lerroa.insertCell();
        const fezaugarriak = lerroa.insertCell();
        const fepaileak = lerroa.insertCell();
        fzb.textContent = i;
        const ezInput =document.createElement('input');
        ezInput.setAttribute('type', 'text');
        fezaugarriak.appendChild(ezInput);
            getEpaileak().forEach(element => {
                const epInput = document.createElement('input');
                const epLabel = document.createElement('label');
                epLabel.setAttribute('for', element);
                epLabel.textContent = element;
                epInput.setAttribute('id', element);
                epInput.setAttribute('type', 'checkbox');
                epInput.setAttribute('value', element);
                fepaileak.appendChild(epInput);
                fepaileak.appendChild(epLabel);
            });


    }
    taulaContainer.appendChild(taula);
    const button =document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Faseak bidali';
    taulaContainer.appendChild(button);

}

function getEpaileak(){ //tmp
    const epaileak = ["user1", "user2", "user3"];
    return epaileak;
}

function faseakSortu(){
    console.log("Faseak pndo sortu dira");
}



