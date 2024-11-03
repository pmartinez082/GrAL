class user {
    constructor(username, email, password, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

class fasea {
    constructor(izena, ezaugarriak, epaileak, aktiboa) {
        this.izena = izena;
        this.ezaugarriak = ezaugarriak;
        this.epaileak = epaileak;
        this.aktiboa = aktiboa;

    }
};


class lehiaketa {
    constructor(data, lehiaketaIzena, faseKopurua, faseak, aktiboa) {
        this.data = data;
        this.lehiaketaIzena = lehiaketaIzena;
        this.faseKopurua = faseKopurua;
        this.faseak = faseak;
        this.aktiboa = aktiboa;
    }
};

class taldea{
    constructor(username, partaideak, deskalifikatuta){
        this.username = username;
        this.partaideak = partaideak;
        this.deskalifikatuta = deskalifikatuta;

    }    
}

class epaiketa{
    constructor(fasea, balorazioak, taldea){
        this.fasea = fasea;
        this.balorazioak = balorazioak;
        this.taldea = taldea;
    }       
};

class epailearenBozkaketaGuztiak{
    constructor(lehiaketa,userFaseGuztienEpaiketak, bukatuta){
        this.lehiaketa = lehiaketa;
        this.userFaseGuztienEpaiketak = userFaseGuztienEpaiketak;
        this.bukatuta = bukatuta;
    }
}
        

let lehiaketak = [new lehiaketa("2024-10-31","lehiaketa1",2, [new fasea("fasea1",["a", "b"],["epaile1", "epaile2"]), new fasea("fasea2",["c", "d","e"],["epaile4", "epaile6","epaile7"])], false),new lehiaketa("2025-01-17","lehiaketa2",3, [new fasea("fasea1",["g", "h"],["epaile1", "epaile3","epaile4"]), new fasea("fasea2",["x", "y","z"],["epaile4", "epaile15","epaile7"]),new fasea("fasea3",["l", "m","n"],["epaile1", "epaile6","epaile7", "epaile34"])],true)];
let lehiaketa_;
let taldeak = [ new taldea("taldea1", ["part1", "part2", "part3"], false), new taldea("taldea2", ["part4, part5", "part6", "part7"], false)];
let userFasearenEpaiketak = [];
let userFaseGuztienEpaiketak = [];
let epaileBozkaGuztiak = []

 if(JSON.parse(localStorage.getItem("epaileBozkaGuztiak"))!=null){
    epaileBozkaGuztiak = JSON.parse(localStorage.getItem("epaileBozkaGuztiak"));

}
function findAktiboa(){

    for (const l_ of lehiaketak) {
        if (l_.aktiboa) {
            console.log(l_.aktiboa);
            lehiaketa_ = l_;
            return true;
        }
    }

    lehiaketa_ = null;
    const mezua = document.createElement('h1');
    mezua.textContent = "Ez dago lehiaketa aktiborik";
    document.body.appendChild(mezua);
    return false;
}

function findEpaile(username, fase){
    const aurkitutakoak = [];
    fase.epaileak.forEach(epaile => {
        if(epaile == username){
            aurkitutakoak.push(fase.izena);
        }
    });
    return aurkitutakoak;
}

function epaitu(username, i){
    const hurrengoaForm = document.getElementById('hurrengoa');

    if (hurrengoaForm){
       document.body.removeChild(hurrengoaForm);
    }

    const hasiForm = document.getElementById('hasiForm');
    hasiForm.style.display = "none";
    const epaiketaDiv = document.getElementById('epaiketa');
    
    if(!findAktiboa()){
        return;
    }
    if(lehiaketa_.faseKopurua <= i|| epaileBozkaGuztiak.bukatuta){
        epaiketaDiv.innerHTML = "";
        const mezua = document.createElement('h1');
        mezua.textContent = "Bozkaketa amaitu da";
        epaiketaDiv.appendChild(mezua);
        epaileBozkaGuztiak.bukatuta = true;
        epaileBozkaGuztiak.lehiaketa = lehiaketa_;
        epaileBozkaGuztiak.userFaseGuztienEpaiketak = userFaseGuztienEpaiketak;
        console.log(epaileBozkaGuztiak.bukatuta+ " "+epaileBozkaGuztiak.userFasearenEpaiketak);
        localStorage.setItem('epaileBozkaGuztiak', JSON.stringify(epaileBozkaGuztiak));
        return;
    }
    const aurkitutakoak = findEpaile(username, lehiaketa_.faseak[i]);
    if(aurkitutakoak.length == 0){
        epaiketaDiv.innerHTML = "";
        const mezua = document.createElement('h1');
        mezua.textContent = ""+lehiaketa_.faseak[i].izena+" fasean ezin duzu bozkatu";  
        userFasearenEpaiketak.push(new epaiketa("","",""));    
        userFaseGuztienEpaiketak.push(userFasearenEpaiketak);
        userFasearenEpaiketak = [];
        epaiketaDiv.appendChild(mezua);
        const hurrengoa = document.createElement('button');
        i++;
        const hurrengoaForm = document.createElement('form');
        hurrengoaForm.setAttribute('onsubmit', `epaitu('`+username+`', '`+i+`')`);
        hurrengoa.textContent = "Hurrengo fasea";
        hurrengoaForm.id = "hurrengoa"
        hurrengoaForm.appendChild(hurrengoa);
        document.body.appendChild(hurrengoaForm);
        
    }

    else{
        epaiketaDiv.innerText = lehiaketa_.faseak[i].izena+" fasean bozkatzen ari zara";
        const ftaula = document.createElement('table');
        const fzutabe = ftaula.insertRow();
        const fase = lehiaketa_.faseak[i];
        fzutabe.insertCell().textContent = "Partaidea";
        fase.ezaugarriak.forEach(ez => {
            fzutabe.insertCell().textContent = ez;
        });
        fzutabe.insertCell().textContent = "Ekintza";
        
            const flerro = ftaula.insertRow();
            flerro.insertCell().innerHTML = `<input type="text" id = "taldea" placeholder = "taldearen izena" required>`;
            fase.ezaugarriak.forEach(ez => {
                flerro.insertCell().innerHTML = `<input type="number" step = "0.01" id="balorazio${ez}" min = "0" max = "10" required>`;

        });
        
        
        const gorde = document.createElement('button');
        gorde.textContent = "Gorde";
        flerro.insertCell().appendChild(gorde);
        epaiketaDiv.appendChild(ftaula);
}
}




function balorazioaSortu(username,event){
    let i = userFaseGuztienEpaiketak.length;
    
    const hurrengoa = document.getElementById('hurrengoa');
    if (hurrengoa != null){
    hurrengoa.innerHTML = "";
    }
    event.preventDefault();
    const epaiketaForm = document.getElementById('epaiketaForm');
    const taldeaName = document.getElementById("taldea").value;
    const fase = lehiaketa_.faseak[i];
    console.log(fase.ezaugarriak);
    const balorazioak = [];
    fase.ezaugarriak.forEach(ez => {
        const balorazio = document.getElementById("balorazio"+ez).value;
        balorazioak.push(balorazio);
    });
    const talde = findTaldea(taldeaName);   
    if(!talde||findDeskalifikatuta(taldeaName)){
        epaiketaForm.reset();
        const mezua = document.createElement('h1');
        mezua.textContent = "Ez da talde hori aurkitu edo jada deskalifikatuta dago";
       document.getElementById('epaiketa').appendChild(mezua);
        return;
    }

    
    const epaiketa_ = new epaiketa(fase, balorazioak, talde);
    if(!checkEpaiketa(talde.username)){
        epaiketaForm.reset();
        const mezua = document.createElement('h1');
        mezua.textContent = "Talde horretarako balorazioa dagoeneko existitzen da";
        document.getElementById('epaiketa').appendChild(mezua);
        return;
    
    }
    userFasearenEpaiketak.push(epaiketa_);
    epaiketaForm.reset();
    document.getElementById('epaiketa').innerText = "";
    console.log(i, findEzDeskalifikatutakoak());
    if(findEzDeskalifikatutakoak() == userFasearenEpaiketak.length || findEpaile(username, fase).length == 0){
        userFaseGuztienEpaiketak.push(userFasearenEpaiketak);
        userFasearenEpaiketak = [];
        i++;
        epaitu(username, i);
        
    }
    else{
        epaitu(username, i);
    }
}

function findTaldea(taldeaName){
    for (const t of taldeak) {
        if(t.username == taldeaName) {  
            return t;
        }
    }       
    return false;
}

function findDeskalifikatuta(taldea){
for (const t of taldeak) {
        if(t.username == taldea){
            return t.deskalifikatuta;
        }
    }
}

function findEzDeskalifikatutakoak(){
    let ezdesk = [];
    for (const t of taldeak) {
        if(!t.deskalifikatuta){
            ezdesk.push(t.username);
        }
    }
    return ezdesk.length;

}

function checkEpaiketa(taldeaUsername){
    for (const ep of userFasearenEpaiketak) {
        if(ep.taldea.username == taldeaUsername){
            return false;
        }
    }

    return true;


}