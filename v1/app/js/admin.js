
import * as f from "./fasea.js";
import * as u from "./user.js";
import * as tx from "./txapelketa.js";
import * as ep from "./epaimahaikidea.js";
import * as ez from "./ezaugarria.js";
import * as klaseak from "./klaseak.js";


let ezaugarriak = [];
let epaimahakideak = [];


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
    const zutabe = taula.insertRow();
    const id  = zutabe.insertCell()
    id.innerHTML = "<input type='hidden' id='idFasea'></input>";
    id.hidden = true;
  
    zutabe.insertCell().textContent = "Fase izena";
    zutabe.insertCell().textContent = "Kodea";
    zutabe.insertCell().textContent = "Hasiera";
    zutabe.insertCell().textContent = "Amaiera";
    zutabe.insertCell().textContent = "Irizpidea";
    zutabe.insertCell().textContent = "Ezaugarriak";
    zutabe.insertCell().textContent = "Epaimahaikideak";

    const lerroa = taula.insertRow();
    lerroa.insertCell().innerHTML = "<input type='text' id='faseIzena' placeholder='Fase izena'></input>";
    lerroa.insertCell().innerHTML = "<input type='text' id='faseKodea' placeholder='Fase kodea'></input>";
    lerroa.insertCell().innerHTML = "<input type='date' id='faseHasiera' placeholder='Fase hasiera'></input>";
    lerroa.insertCell().innerHTML = "<input type='date' id='faseAmaiera' placeholder='Fase amaiera'></input>";
    lerroa.insertCell().innerHTML = "<input type='text' id='faseIrizpidea' placeholder='Fase irizpidea'></input>";

   
    ezaugarriak = [];
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
    const ezaugLerroa2 = ezaugarriakTable.insertRow();
    ezaugLerroa2.insertCell().innerHTML = "<input type='text' name='ezaugarriaIzena' placeholder='Ezaugarriaren izena'></input>";
    ezaugLerroa2.insertCell().innerHTML = "<input type='number' name='ezaugarriaMin' placeholder='Puntuak Min'></input>";
    ezaugLerroa2.insertCell().innerHTML = "<input type='number' name='ezaugarriaMax' placeholder='Puntuak Max'></input>";
    ezaugLerroa2.insertCell().appendChild(ezaugButton);
        
    ezaugButton.onclick = () => {
        const ezIz = document.getElementsByName('ezaugarriaIzena');
        const eMin = document.getElementsByName('ezaugarriaMin');
        const eMax = document.getElementsByName('ezaugarriaMax');
        ezIz.disabled = true;
        eMin.disabled = true;
        eMax.disabled = true;
        
    const ezaugLerroa = ezaugarriakTable.insertRow();
    ezaugLerroa.insertCell().innerHTML = "<input type='text' name='ezaugarriaIzena' placeholder='Ezaugarriaren izena' value = ''></input>";
    ezaugLerroa.insertCell().innerHTML = "<input type='number' name='ezaugarriaMin' placeholder='Puntuak Min' value = ''></input>";
    ezaugLerroa.insertCell().innerHTML = "<input type='number' name='ezaugarriaMax' placeholder='Puntuak Max' value = ''></input>";
    ezaugLerroa.insertCell().appendChild(ezaugButton);
        
     
    };

    ezaugarriakDiv.appendChild(ezaugarriakTable);
    ezaugarriakDiv.appendChild(ezaugButton);
    lerroa.insertCell().appendChild(ezaugarriakDiv);
    
    lerroa.insertCell().innerHTML = epaileakCheckbox(epaileak);

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
        const zutabe = taula.insertRow();
        const id = zutabe.insertCell();
        id.id = "idFasea";
        id.hidden = true;
        zutabe.insertCell().textContent = "Txapelketa Izena";
        zutabe.insertCell().textContent = "Data";
        zutabe.insertCell().textContent = "Lekua";
        zutabe.insertCell().textContent = "Faseak";
        txapelketak.forEach((txapelketa) => {
            const lerroa = taula.insertRow();
            lerroa.insertCell().textContent = txapelketa.izena || "-";
            lerroa.insertCell().textContent = txapelketa.dataOrdua || "-";
          
            lerroa.insertCell().textContent = txapelketa.lekua || "-";

            const fasCell = lerroa.insertCell();
            const ftaula = document.createElement('table');
            if(txapelketa.faseak.length >0){
            const fzutabe = ftaula.insertRow();
            fzutabe.insertCell().textContent = "Fase Izena";
            fzutabe.insertCell().textContent = "Kodea";
            fzutabe.insertCell().textContent = "Egoera";
            fzutabe.insertCell().textContent = "Hasiera";
            fzutabe.insertCell().textContent = "Amaiera";
            fzutabe.insertCell().textContent = "Ezaugarriak";
            fzutabe.insertCell().textContent = "Epaimahaikideak";

            }

            (txapelketa.faseak || []).forEach((fase) => {
                const faseRow = ftaula.insertRow();
                faseRow.insertCell().textContent = fase.izena || "-";
                faseRow.insertCell().textContent = fase.kodea || "-";
                faseRow.insertCell().textContent =
                    fase.egoera === 0
                        ? "Hasigabea"
                        : fase.faseEgoera === 1
                        ? "Martxan"
                        : "Amaituta";
                faseRow.insertCell().textContent = fase.hasiera ||"-";
                faseRow.insertCell().textContent = fase.amaiera ||"-";
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






