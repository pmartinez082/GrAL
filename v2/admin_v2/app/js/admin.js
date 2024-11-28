
import * as f from "./fasea.js";
import * as u from "./user.js";
import * as tx from "./txapelketa.js";
import * as ep from "./epaimahaikidea.js";
import * as ez from "./ezaugarria.js";
import * as eb from "./ebaluazioa.js";
import * as ta from "./taldea.js"
import * as klaseak from "./klaseak.js";
import  'https://cdn.jsdelivr.net/npm/jwt-decode/build/jwt-decode.min.js';


 export function txapelketaSortu(event){
    const txapelketaForm = document.getElementById('txapelketaForm1');
    event.preventDefault();
    tx.createNewTxapelketa(event);
    txapelketaForm.reset();
    txapelketaForm.setAttribute('disabled', true);
    txapelketaForm.style.display = "none";
    faseakForm(1);

}
export function getEzaugarriakArray(){
    return ezaugarriak;
}

export function getEpaimahaikideakArray(){
    return epaimahakideak;
}
export async function faseakForm() {
    const epaileak = await u.getEpaileak();
    const l_ = await tx.getTxapelketa();

    if (l_ === null) {
        const abisua = document.createElement('h1');
        abisua.innerHTML = "Editatzen ari zaren txapelketa ezabatu da";
        return;
    }

    const taulaContainer = document.getElementById('faseenTaula');
    const taula = document.createElement('table');
    const row1 = taula.insertRow();
    const id  = row1.insertCell()
    id.innerHTML = "<input type='hidden' id='idFasea'></input>";
    id.hidden = true;
  
    row1.insertCell().textContent = "Fase izena";
    row1.insertCell().textContent = "Kodea";
    row1.insertCell().textContent = "Hasiera";
    row1.insertCell().textContent = "Amaiera";
    row1.insertCell().textContent = "Irizpidea";
    row1.insertCell().textContent = "Ezaugarriak";
    row1.insertCell().textContent = "Epaimahaikideak";

    const row2 = taula.insertRow();
    row2.insertCell().innerHTML = "<input type='text' id='faseIzena' placeholder='Fase izena'></input>";
    row2.insertCell().innerHTML = "<input type='text' id='faseKodea' placeholder='Fase kodea'></input>";
    row2.insertCell().innerHTML = "<input type='date-time-local' id='faseHasiera' placeholder='Fase hasiera'></input>";
    row2.insertCell().innerHTML = "<input type='date-time-local' id='faseAmaiera' placeholder='Fase amaiera'></input>";
    row2.insertCell().innerHTML = "<input type='text' id='faseIrizpidea' placeholder='Fase irizpidea'></input>";

   
    
    const ezaugarriakDiv = document.createElement('div');
    const ezaugarriakTable = document.createElement('table');

    const ezaugarriakHeaderRow = ezaugarriakTable.insertRow();
    ezaugarriakHeaderRow.insertCell().textContent = "Ezaugarria";
    ezaugarriakHeaderRow.insertCell().textContent = "Puntuak Min";
    ezaugarriakHeaderRow.insertCell().textContent = "Puntuak Max";    
    const ezaugButton = document.createElement('button');
    ezaugButton.id = "ezaugButton"
    ezaugButton.textContent = "Gehitu Ezaugarria";
    ezaugButton.type = "button";
    const ezaugrow22 = ezaugarriakTable.insertRow();
    ezaugrow22.insertCell().innerHTML = "<input type='text' name='ezaugarriaIzena' placeholder='Ezaugarriaren izena'></input>";
    ezaugrow22.insertCell().innerHTML = "<input type='number' name='ezaugarriaMin' placeholder='Puntuak Min'></input>";
    ezaugrow22.insertCell().innerHTML = "<input type='number' name='ezaugarriaMax' placeholder='Puntuak Max'></input>";
    ezaugrow22.insertCell().appendChild(ezaugButton);
        
    ezaugButton.onclick = () => {
        const ezIz = document.getElementsByName('ezaugarriaIzena');
        const eMin = document.getElementsByName('ezaugarriaMin');
        const eMax = document.getElementsByName('ezaugarriaMax');
        ezIz.disabled = true;
        eMin.disabled = true;
        eMax.disabled = true;
        
    const ezaugrow2 = ezaugarriakTable.insertRow();
    ezaugrow2.insertCell().innerHTML = "<input type='text' name='ezaugarriaIzena' placeholder='Ezaugarriaren izena' value = ''></input>";
    ezaugrow2.insertCell().innerHTML = "<input type='number' name='ezaugarriaMin' placeholder='Puntuak Min' value = ''></input>";
    ezaugrow2.insertCell().innerHTML = "<input type='number' name='ezaugarriaMax' placeholder='Puntuak Max' value = ''></input>";
    ezaugrow2.insertCell().appendChild(ezaugButton);
        
     
    };

    ezaugarriakDiv.appendChild(ezaugarriakTable);
    ezaugarriakDiv.appendChild(ezaugButton);
    row2.insertCell().appendChild(ezaugarriakDiv);
    
    row2.insertCell().innerHTML = epaileakCheckbox(epaileak);

    taulaContainer.appendChild(taula);

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Gorde eta hurrengo fasea konfiguratu';
    taulaContainer.appendChild(button);

    const amaituForm = document.getElementById('amaitu');
    amaituForm.hidden = false;

    txapelketaBistaratu(0);
}

  

export async function faseaSortu(event){
    const faseForm = document.getElementById('faseForm');

    event.preventDefault();
    const epaileakCheck = document.getElementsByName('checkbox');
    if(!checkCheckbox(epaileakCheck)){
        const mezua = document.createElement('h1');
        taulaContainer.innerHTML = "";
        mezua.textContent = "Gutxienez epaile bat aukeratu behar duzu";
        taulaContainer.appendChild(mezua);
        faseForm.reset();
        faseakForm();
        return;
    }
  
    let epaimahakideak = [];
    await f.createNewFasea();
    await ez.createNewEzaugarria();
    const checkEpaileak = document.getElementsByName('checkbox');
    checkEpaileak.forEach(cE => {
        if (cE.checked) {
            epaimahakideak.push(new klaseak.Epaimahaikidea(0, cE.value,0));
        }
    });
 
    await ep.createNewEpaimahaikidea();
    
    faseForm.reset();
    const taulaContainer = document.getElementById('faseenTaula');
    taulaContainer.innerHTML = "";  
    faseakForm();
   

    

}





export function checkCheckbox(epaileak){
    for (const epaile of epaileak) {
        if(epaile.checked){
            return true;}
        }
        return false;
}
export async function txapelketaBistaratu(i) {
    if(!u.autentifikatu()) return;
    try {
       const info = await tx.getInfoGuztia();
       const txapelketa = await tx.getTxapelketarenInfoGuztia();
       var txapelketak;
       if(i === 0) txapelketak = txapelketa;
       else txapelketak = info;
        console.log(txapelketak);

        if (!txapelketak || txapelketak.length === 0) {
            const hutsik = document.createElement('h1');
            hutsik.textContent = "Ez dago txapelketarik";
            document.body.appendChild(hutsik);
            return;
        }

        const txapelketakDiv = document.getElementById("txapelketak");
        txapelketakDiv.innerHTML = "";
        const taula = document.createElement('table');
        const row1 = taula.insertRow();
        const id = row1.insertCell();
        id.id = "idFasea";
        id.hidden = true;
        row1.insertCell().textContent = "Txapelketa Izena";
        row1.insertCell().textContent = "Data";
        row1.insertCell().textContent = "Lekua";
        row1.insertCell().textContent = "Faseak";
        txapelketak.forEach((txapelketa) => {
            const row2 = taula.insertRow();
            row2.insertCell().textContent = txapelketa.izena || "-";
            row2.insertCell().textContent = txapelketa.dataOrdua || "-";
          
            row2.insertCell().textContent = txapelketa.lekua || "-";

            const fasCell = row2.insertCell();
            const ftaula = document.createElement('table');
            if(txapelketa.faseak.length >0){
            const frow1 = ftaula.insertRow();
            frow1.insertCell().textContent = "Fase Izena";
            frow1.insertCell().textContent = "Kodea";
            frow1.insertCell().textContent = "Egoera";
            frow1.insertCell().textContent = "Hasiera";
            frow1.insertCell().textContent = "Amaiera";
            frow1.insertCell().textContent = "Ezaugarriak";
            frow1.insertCell().textContent = "Epaimahaikideak";

            }

            (txapelketa.faseak || []).forEach((fase) => {
                const faseRow = ftaula.insertRow();
                faseRow.insertCell().textContent = fase.izena || "-";
                faseRow.insertCell().textContent = fase.kodea || "-";
                faseRow.insertCell().textContent =
                    parseInt(fase.egoera) === 0
                        ? "Hasigabea"
                        : parseInt(fase.egoera) === 1
                        ? "Martxan"
                        : "Amaituta";
                faseRow.insertCell().textContent = fase.hasiera || "-";
                faseRow.insertCell().textContent = fase.amaiera || "-";
                faseRow.insertCell().textContent =
                    (fase.ezaugarriak || [])
                        .map((ez) => ez.izena)
                        .join(", ") || "-";

                faseRow.insertCell().textContent =
                    (fase.epaimahaikideak || [])
                        .map((ep) => ep.username)
                        .join(", ") || "-";
            });

            fasCell.appendChild(ftaula);
        });

        txapelketakDiv.appendChild(taula);
    } catch (error) {
        console.error("Errorea txapelketak bistaratzean:", error);
    }
}       

function epaileakCheckbox(epaileak) {
    let htmlString = "";
    epaileak.forEach((epaile) => {
        const checkbox = `<input type="checkbox" id="epaile-${epaile.username}" name="checkbox" value="${epaile.username}">`;
        const label = `<label for="epaile-${epaile.username}">${epaile.username}</label>`;
        const container = `<div>${checkbox}${label}</div>`;
        htmlString += container; 
    });

    return htmlString;
}
export async function faseakBistaratu() {
    u.autentifikatu();
    const faseakTaula = document.getElementById("faseakTaula");
    const faseak = await tx.getTxapelketaAktiboarenInfo();
    const row1 = faseakTaula.insertRow();
    row1.insertCell().textContent = "Fase Izena";
    row1.insertCell().textContent = "Hasiera";
    row1.insertCell().textContent = "Amaiera";
    row1.insertCell().textContent = "Egoera";
    row1.insertCell().textContent = "Irizpidea";
    row1.insertCell().textContent = "Ezaugarriak";
    row1.insertCell().textContent = "Parte hartzen duten epaileak";
    faseak.forEach((fase) => {
        const ez = fase.ezaugarriak || [];
        const ep = fase.epaimahaikideak || [];
        const row = faseakTaula.insertRow();
        row.insertCell().textContent = fase.izena || "";
        row.insertCell().textContent = fase.hasiera  || "";
        row.insertCell().textContent = fase.amaiera || "";
        const buttonEgoera = document.createElement('button');
        buttonEgoera.id = `buttonEgoera-${fase.idFasea}`;
        if (fase.egoera === 0) {
            buttonEgoera.textContent = "Hasi";
        } else if (fase.egoera === 1) {
            buttonEgoera.textContent = "Bukatu";
        } else {
            buttonEgoera.hidden = true;
        }
        row.insertCell().innerHTML = fase.egoera ===0 ?  buttonEgoera.outerHTML : fase.egoera ===1 ? buttonEgoera.outerHTML : "<div>Amaituta</div>";
        row.insertCell().textContent = fase.irizpidea || "";
        row.insertCell().innerHTML = ez.map(item => `<table id="ezaugarria-${item.idEzaugarria}"><tr><td><button id="buttonEzaugarria-${item.idEzaugarria}">${item.izena || ""}</button></td></tr></table>`).join('\n');
        row.insertCell().innerHTML = ep.map(item => `<table id="epaimahaikidea-${item.idEpaimahaikidea}"><tr><td><button id="buttonEpaimahaikidea-${item.idEpaimahaikidea}">${item.username || ""}</button></td></tr></table>`).join('\n');
        const buttonEg = document.getElementById(`buttonEgoera-${fase.idFasea}`);
        if(buttonEg !== null){
            buttonEg.addEventListener('click', (event) => aldatuEgoera(event));
        }
        if(ez.length >0){
        ez.forEach(ezaugarria => {
            const button = document.getElementById(`buttonEzaugarria-${ezaugarria.idEzaugarria}`);
            if (button) {
                button.addEventListener('click', (event) => ezaugarriaBistaratu(event));
            }
        });
    }
    if(ep.length >0){   
        ep.forEach(epaimahaikidea => {
            const button = document.getElementById(`buttonEpaimahaikidea-${epaimahaikidea.idEpaimahaikidea}`);
            if (button) {
                button.addEventListener('click', (event) => epaimahaikideaBistaratu(event, ez.length));
            }
        });
    }
    });
}

async function ezaugarriaBistaratu(event) {
    event.preventDefault();
    const ezaugarria = await ez.getEzaugarria(event);
    console.log(ezaugarria);
    console.log(ezaugarria.idEzaugarria);
    const taula = document.getElementById(`ezaugarria-${ezaugarria.idEzaugarria}`);
    taula.innerHTML = "";
    const row1 = taula.insertRow();
    row1.insertCell().textContent = "Ezaugarria";
    row1.insertCell().textContent = "Puntuazio minimoa";
    row1.insertCell().textContent = "Puntuazio maximoa";
    const row2 = taula.insertRow();
    row2.insertCell().innerHTML = `<button id="buttonEzaugarria-${ezaugarria.idEzaugarria}">${ezaugarria.izena || ""}</button>`;
    row2.insertCell().textContent = ezaugarria.puntuakMin;
    row2.insertCell().textContent = ezaugarria.puntuakMax || "";
    const button = document.getElementById(`buttonEzaugarria-${ezaugarria.idEzaugarria}`);
    if (button) {
        button.addEventListener('click', (event) => garbituEzaugarria(event, ezaugarria.idEzaugarria, ezaugarria.izena)); 
    }
}

function garbituEzaugarria(event,idEzaugarria, izena) {
    event.preventDefault();
    const taula = document.getElementById("ezaugarria-"+idEzaugarria);
    if (!taula) return;
    taula.innerHTML = `<tr><td><button id="buttonEzaugarria-${idEzaugarria}">${izena || ""}</button></td></tr>`;
    const button = document.getElementById(`buttonEzaugarria-${idEzaugarria}`);
    if (button) {
        button.addEventListener('click', (event) => ezaugarriaBistaratu(event));
    }
}

async function epaimahaikideaBistaratu(event,ez){
    event.preventDefault();
    const ebaluazioak = await eb.getEpailearenEbaluazioakFaseka(event);
    console.log(ebaluazioak);
    if (ebaluazioak.length === 0) {
        return;
    }
    console.log(ebaluazioak);
    const taula = document.getElementById("epaimahaikidea-"+ebaluazioak[0].idEpaimahaikidea);
    taula.innerHTML = "";
    const row1 = taula.insertRow();
    row1.insertCell().textContent = "Epaimahaikidea";
    row1.insertCell().textContent = "Egindako ebaluazioak";
    row1.insertCell().textContent = "Baloratzeke";
    const row2 = taula.insertRow();
    row2.insertCell().innerHTML = `<table id = taulaEpaimahaikideak-${ebaluazioak[0].idEpaimahaikidea}"><td><tr><button id="buttonEpaimahaikidea-${ebaluazioak[0].idEpaimahaikidea}">${event.target.textContent || ""}</button></tr></td></table>`;	
    const taldeak = await ta.getTaldeAktiboak();    
    row2.insertCell().innerHTML = `<table id = "taulaEbaluazioak-${ebaluazioak[0].idEpaimahaikidea}"><tr><td><button id = "buttonEbaluazioak-${ebaluazioak[0].idEpaimahaikidea}">${ebaluazioak.length}</button></td></tr></table>`;
    row2.insertCell().innerHTML =`<table id = "taulaTaldeak-${ebaluazioak[0].idEpaimahaikidea}"><tr><td><button id = "buttonTaldeak-${ebaluazioak[0].idEpaimahaikidea}">${parseInt( taldeak.length)*ez - parseInt(ebaluazioak.length)}</button></td></tr></table>`;
    const button = document.getElementById(`buttonEpaimahaikidea-${ebaluazioak[0].idEpaimahaikidea}`);
    if (button) {
        button.addEventListener('click', (event) => garbituEpaimahaikidea(event, ebaluazioak[0].idEpaimahaikidea, event.target.textContent,ez)); 
    }
    const button2 = document.getElementById(`buttonTaldeak-${ebaluazioak[0].idEpaimahaikidea}`);
    if (button2) {
        button2.addEventListener('click', (event) => taldeakBistaratu(event, ebaluazioak[0].idEpaimahaikidea)); 
    }
    const button3 = document.getElementById(`buttonEbaluazioak-${ebaluazioak[0].idEpaimahaikidea}`);
    if (button3) {
        button3.addEventListener('click', (event) => ebaluazioakBistaratu(event, ebaluazioak)); 
    }
    }

async function garbituEpaimahaikidea(event,idEpaimahaikidea, username, ez) {
    event.preventDefault();
    const taula = document.getElementById("epaimahaikidea-"+idEpaimahaikidea);
    if (!taula) return;
    taula.innerHTML = `<tr><td><button id="buttonEpaimahaikidea-${idEpaimahaikidea}">${username || ""}</button></td></tr>`;
    const button = document.getElementById(`buttonEpaimahaikidea-${idEpaimahaikidea}`);
    if (button) {
        button.addEventListener('click', (event) => epaimahaikideaBistaratu(event, ez));
    }
}  ;
async function taldeakBistaratu(event, idEpaimahaikidea) {
    event.preventDefault();
    const taldeak = await ta.getTaldeak();
    taldeak.sort((a, b) => {
        if (a.egoera < b.egoera) return -1;
        if (a.egoera > b.egoera) return 1;
        return 0; 
    });

    const taula = document.getElementById(`taulaTaldeak-${idEpaimahaikidea}`);
    const bal = event.target.textContent;
    
    taula.innerHTML = "";
    const row1 = taula.insertRow();
    row1.insertCell().innerHTML = `<button id = "buttonTaldeak-${idEpaimahaikidea}">${bal}</button>`;
    row1.insertCell().textContent = "Taldea";
    row1.insertCell().textContent = "Datuak";
    row1.insertCell().textContent = "Egoera";
    row1.insertCell().textContent = "Puntuak guztira";
    
    for (const taldea of taldeak) {
        const row2 = taula.insertRow();
        row2.insertCell();
        row2.insertCell().textContent = taldea.izena;
        row2.insertCell().textContent = taldea.email+ ", "+taldea.telefonoa;
        row2.insertCell().textContent = parseInt(taldea.egoera) === 0 ? "Txapelketan" : parseInt(taldea.egoera) === 1 ? "Txapelketan" : "Deskalifikatuta";
        row2.insertCell().textContent = taldea.puntuakGuztira || "0";
        
    }
    const button = document.getElementById(`buttonTaldeak-${idEpaimahaikidea}`);
    if (button) {
        button.addEventListener('click', (event) => garbituTaldea(event, idEpaimahaikidea)); 
    }
};

async function garbituTaldea(event, idEpaimahaikidea) {
    event.preventDefault();
    const taula = document.getElementById(`taulaTaldeak-${idEpaimahaikidea}`);
    taula.innerHTML = `<tr><td><button id="buttonTaldeak-${idEpaimahaikidea}">${event.target.textContent}</button></td></tr>`;
    const button = document.getElementById(`buttonTaldeak-${idEpaimahaikidea}`);
    if (button) {
        button.addEventListener('click', (event) => taldeakBistaratu(event, idEpaimahaikidea));
    }
}  ;



async function ebaluazioakBistaratu(event, ebaluazioak){
    event.preventDefault();
    const ebaluazioakTaula = document.getElementById("taulaEbaluazioak-"+event.target.id.split('buttonEbaluazioak-')[1]);
    ebaluazioakTaula.innerHTML = "";
    const row1 = ebaluazioakTaula.insertRow();
    row1.insertCell().innerHTML = `<button id = "buttonEbaluazioak-${event.target.id.split('buttonEbaluazioak-')[1]}">${event.target.textContent}</button>`;
    row1.insertCell().textContent = "Puntuazioa";
    row1.insertCell().textContent = "Data";
    row1.insertCell().textContent = "Ezaugarria";
    row1.insertCell().textContent = "Taldea";
    for (const ebaluazioa of ebaluazioak) {
        const row2 = ebaluazioakTaula.insertRow();
        row2.insertCell();
        row2.insertCell().textContent = ebaluazioa.puntuak;
        row2.insertCell().textContent = ebaluazioa.noiz;
        row2.insertCell().textContent = ebaluazioa.idEzaugarria;
        row2.insertCell().textContent = ebaluazioa.idTaldea;
    }
    const button = document.getElementById(`buttonEbaluazioak-${event.target.id.split('buttonEbaluazioak-')[1]}`);
    if (button) {
        button.addEventListener('click', (event) => garbituEbaluazioa(event, ebaluazioak));
    }
};

function garbituEbaluazioa(event, ebaluazioak) {
    event.preventDefault();
    const idEbaluazioa = event.target.id.split('buttonEbaluazioak-')[1];
    const info = ebaluazioak.length;
    const taula = document.getElementById(`taulaEbaluazioak-${idEbaluazioa}`);
    taula.innerHTML = `<tr><td><button id="buttonEbaluazioak-${idEbaluazioa}">${info}</button></td></tr>`;
    const button = document.getElementById(`buttonEbaluazioak-${idEbaluazioa}`);
    if (button) {
        button.addEventListener('click', (event) => ebaluazioakBistaratu(event, ebaluazioak));
    }
}

async function aldatuEgoera(event) {
    event.preventDefault();
    await f.egoeraAldatu(event);
    const egoeraButton = document.getElementById(`buttonEgoera-${event.target.id.split('buttonEgoera-')[1]}`);
    if (egoeraButton) {
        if(event.target.textContent === 'Hasi'){
            egoeraButton.textContent = 'Bukatu';
        }
        else{
            egoeraButton.textContent = 'Bukatuta';
            egoeraButton.disabled = true;
        }
    }


}

