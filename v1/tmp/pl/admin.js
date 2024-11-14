

class user {
    constructor(username, email, password, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
let faseak = [];
let users = [new user("user1", "user1@mail.com", "123","epailea"), new user("user3", "user3@mail.com", "123","epailea"), new user("user2", "user2@mail.com", "456","epailea"),new user("administraria", "admin@mail.com", "456","admin")];;

let lehiaketak = [];
class fasea {
    constructor(izena, ezaugarriak, epaileak) {
        this.izena = izena;
        this.ezaugarriak = ezaugarriak;
        this.epaileak = epaileak;

    }
};


class lehiaketa {
    constructor(data, lehiaketaIzena,faseKopurua, faseak, aktiboa, lekua) {
        this.data = data;
        this.lehiaketaIzena = lehiaketaIzena;
        this.faseKopurua = faseKopurua;
        this.faseak = faseak;
        this.aktiboa = aktiboa;
        this.lekua = lekua;
    }
};

export function lehiaketaSortu(event){
    event.preventDefault();
    const data = document.getElementById('data').value;
    const lehiaketaIzena = document.getElementById('lehiaketaIzena').value;
    const faseKopurua = document.getElementById('faseKopurua').value;
    const lehiaketaLekua = document.getElementById('lehiaketaLekua').value; 
    const lehiaketaForm = document.getElementById('lehiaketaForm1');

    const lehiaketa_ = new lehiaketa(data, lehiaketaIzena, faseKopurua, null, true, lehiaketaLekua);
    max = faseKopurua; 
    console.log("Lehiaketa ondo sortu da: "+lehiaketa_.data +" "+ lehiaketa_.lehiaketaIzena +" "+ lehiaketa_.faseKopurua);
    lehiaketaForm.reset();
    lehiaketaForm.setAttribute('disabled', true);
    lehiaketaForm.style.display = "none";
    lehiaketak.push(lehiaketa_);
    faseakForm(1);

    

}



export function findLehiaketa(lehiaketaIzena){
    lehiaketak.forEach(lehiaketa => {
        if(lehiaketa.lehiaketaIzena === lehiaketaIzena){
            lehiaketak = lehiaketak.filter(lehiaketa => lehiaketa.lehiaketaIzena !== lehiaketaIzena);
            return lehiaketa;
        }
    });

    return null;
}



export function faseakForm(i){
    const lehiaketaForm = document.getElementById('lehiaketaForm1');
    const lehiaketaIzena = document.getElementById('lehiaketaIzena').value;
    if(i > max){
        const  l_ = findLehiaketa(lehiaketaIzena);
        if(l_ === null){
           const abisua  = document.createElement('h1');
            abisua.innerHTML = "Editatzen ari zaren lehiaketa ezabatu da";
            return;
        }
        l_.faseak = faseak;
        lehiaketak.push( l_);
        lehiaketaForm.setAttribute('disabled', false);
        lehiaketaForm.reset();
        faseak.clear;
        //localStorage.setItem('lehiaketak',  JSON.stringify(lehiaketak));
        i = 1;
        return;
    }
        const taulaContainer = document.getElementById('faseenTaula');
        const taula = document.createElement('table');
        const zutabe = taula.insertRow();
        zutabe.insertCell().textContent = "Fase zenbakia";
        zutabe.insertCell().textContent = "Izena";
        zutabe.insertCell().textContent = "Ezaugarriak";
        zutabe.insertCell().textContent = "Epaileak";

        const lerroa = taula.insertRow();
        
        
        const fzb = lerroa.insertCell();
        const fizena = lerroa.insertCell();
        const fezaugarriak = lerroa.insertCell();
        const fepaileak = lerroa.insertCell();
            
            fzb.textContent = i;
            fzb.setAttribute('id', 'fase');
            
            const izInput = document.createElement('input');
            izInput.setAttribute('type', 'text');
            izInput.setAttribute('required', true);
            izInput.setAttribute('id', 'faseIzena');
            fizena.appendChild(izInput);
            
            const ezInput = document.createElement('input');
            ezInput.setAttribute('type', 'text');
            ezInput.setAttribute('required', true);
            ezInput.setAttribute('id', 'ezaugarria');
            ezInput.setAttribute('placeholder', 'ezaugarri1, ezaugarri2');
            fezaugarriak.appendChild(ezInput);
                
            
            getEpaileakDB().forEach(element => {
                    const epInput = document.createElement('input');
                    const epLabel = document.createElement('label');
                    epLabel.setAttribute('for', element.username);
                    epLabel.textContent = element.username;
                    epInput.setAttribute('id', element.username);
                    epInput.setAttribute('type', 'checkbox');
                    epInput.setAttribute('name', 'checkbox');
                    epInput.setAttribute('class', 'group-required');
                    epInput.setAttribute('value', element.username);
                    fepaileak.appendChild(epInput);
                    fepaileak.appendChild(epLabel);
                });

        taulaContainer.appendChild(taula);
        const button = document.createElement('button');
        button.setAttribute('type', 'submit');
        button.textContent = 'gorde eta hurrengo fasea konfiguratu';
        taulaContainer.appendChild(button);
                
                
            
            
        }
  

export function faseaSortu(event){
    event.preventDefault();
    const faseForm = document.getElementById('faseForm');
    const taulaContainer = document.getElementById('faseenTaula');
    const ezaugarriak = document.getElementById('ezaugarria');
    const epaileak = document.getElementsByName('checkbox');
    const faseIzena = document.getElementById('faseIzena');
    let epa = [];
    let ezaug = ezaugarriak.value.split(",");
    if(!checkCheckbox(epaileak)){
        const mezua = document.createElement('h1');
        taulaContainer.innerHTML = "";
        mezua.textContent = "Gutxienez epaile bat aukeratu behar duzu";
        taulaContainer.appendChild(mezua);
        faseForm.reset();
        faseakForm(faseak.length+1);
        return;
    }
    epaileak.forEach(element => {
        if(element.checked){
            epa.push(element.value);}
        }
    );

    const fasea_ = new fasea(faseIzena.value, ezaug, epa);

    console.log("fasea ondo sortu da: "+fasea_.izena +" "+ fasea_.ezaugarriak +" "+ fasea_.epaileak);
    faseak.push(fasea_);

    faseForm.reset();
    taulaContainer.innerHTML = "";  
    
    console.log(faseak.length);
    faseakBistaratu();
    faseakForm(faseak.length +1);
    

}





export function checkCheckbox(epaileak){
    for (const epaile of epaileak) {
        if(epaile.checked){
            return true;}
        }
        return false;
}


export function faseakBistaratu(){
const ezarritakoFaseak = document.getElementById('ezarritakoFaseak');
ezarritakoFaseak.removeAttribute('hidden');
ezarritakoFaseak.innerHTML = "";
const taula = document.createElement('table');

        const zutabe = taula.insertRow();
        zutabe.insertCell().textContent = "Izena";
        zutabe.insertCell().textContent = "Ezaugarriak";
        zutabe.insertCell().textContent = "Epaileak";


faseak.forEach( function(fase){
    const lerroa = taula.insertRow();
    lerroa.insertCell().innerHTML = fase.izena;
    lerroa.insertCell().innerHTML = fase.ezaugarriak;
    lerroa.insertCell().innerHTML = fase.epaileak;
});

ezarritakoFaseak.appendChild(taula);
}

export function lehiaketaBistaratu(){
    const lehiaketak =  getLehiaketak();
    if(lehiaketak == null){
        const hutsik = document.createElement('h1');
        hutsik.textContent = "Ez dago lehiaketarik";
        document.body.appendChild(hutsik);
        return;
    }
    const lehiaketakDiv = document.getElementById("lehiaketak");

    const taula = document.createElement('table');
        const zutabe = taula.insertRow();
        zutabe.insertCell().textContent = "Lehiaketa Izena";
        zutabe.insertCell().textContent = "Data";
        zutabe.insertCell().textContent = "Fase Kopurua";
        zutabe.insertCell().textContent = "Faseak"
        const ftaula = document.createElement('table');
        const fzutabe = ftaula.insertRow();
        fzutabe.insertCell().textContent = "fase Izena";
        fzutabe.insertCell().textContent = "Ezaugarriak";
        fzutabe.insertCell().textContent = "Epaileak";
    lehiaketak.forEach( function(lehiaketa){
        
        const lerroa = taula.insertRow();
        lerroa.insertCell().textContent = lehiaketa.lehiaketaIzena;
        lerroa.insertCell().textContent = lehiaketa.data;
        lerroa.insertCell().textContent = lehiaketa.faseKopurua;
        const fas = lerroa.insertCell();
          



        lehiaketa.faseak.forEach(function(fase){
        const flerroa = ftaula.insertRow();
        flerroa.insertCell().textContent = fase.izena;
        flerroa.insertCell().textContent = fase.ezaugarriak;
        flerroa.insertCell().textContent = fase.epaileak;
       
        fas.append(ftaula) ;
    });

    lehiaketakDiv.appendChild(taula); 
    
   
    

            });



}

export function lehiaketakTmp(){
    lehiaketak = [new lehiaketa("2024-10-31","lehiaketa1",2, [new fasea("fasea1",["a", "b"],["epaile1", "epaile2"]), new fasea("fasea2",["c", "d","e"],["epaile4", "epaile6","epaile7"])], false),new lehiaketa("2025-01-17","lehiaketa2",3, [new fasea("fasea1",["g", "h"],["epaile12", "epaile3","epaile4"]), new fasea("fasea2",["x", "y","z"],["epaile4", "epaile6","epaile7"]),new fasea("fasea3",["l", "m","n"],["epaile4", "epaile6","epaile7", "epaile34"])],false)];



}









