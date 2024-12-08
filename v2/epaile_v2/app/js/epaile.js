import * as f from "./fasea.js";
import * as eb from "./ebaluazioa.js";
import * as t from "./taldea.js";
import * as u from "./user.js";
import * as ep from "./epaimahaikidea.js"

export async function ebaluazioaSortu(event){
    event.preventDefault();
    await eb.createNewEbaluazioa(event);
    document.getElementById('ebaluazioaTaula').innerHTML = "";
    document.getElementById('ebaluazioaButton').hidden = true;
    ebaluazioaForm();


}

export async function ebaluazioaForm(){
   document.getElementById("divBozkatu").hidden = true;

    const fase = await f.getFaseAktiboa();
    console.log(fase);
    if (fase.length === 0) {
        const abisua = document.createElement('h1');
        const itxaron = document.createElement('img');
        itxaron.src = "../../pics/itxaron.svg";
        abisua.innerHTML = "Oraindik ez da fasea hasi";
        document.body.appendChild(abisua);
        document.body.appendChild(itxaron);
        return;
    }
    const fasearenEzaugarriak = await f.getFasearenEzaugarriak();
    const taula = document.getElementById('ebaluazioaTaula');
    taula.classList.add('taula');
    taula.innerHTML = "";
    const baloratzekoTaldeak = await t.getBaloratuGabekoTaldeak();
    if(baloratzekoTaldeak === null){
        const abisua = document.createElement('h1');
        abisua.innerHTML = "Talde guztiak baloratu dira";
        document.body.appendChild(abisua);
    
        return;
    }
    const zutabe = taula.insertRow();
    zutabe.insertCell().textContent = "Fasea";
    zutabe.insertCell().textContent = "Ezaugarria";
    zutabe.insertCell().textContent = "Puntazio minimoa";
    zutabe.insertCell().textContent = "Puntazio maximoa";
    zutabe.insertCell().textContent = "Balorazioa";
    zutabe.insertCell().textContent = "Taldea";
    zutabe.insertCell().textContent = "Ekintza"


    const lerroa = taula.insertRow();
    lerroa.insertCell().textContent = fase.izena;
    lerroa.insertCell().innerHTML = ezaugarrienTaula(fasearenEzaugarriak);
    lerroa.insertCell().innerHTML = puntuazioTaula(fasearenEzaugarriak, "puntuakMin");
    lerroa.insertCell().innerHTML = puntuazioTaula(fasearenEzaugarriak, "puntuakMax");
    lerroa.insertCell().innerHTML = balorazioenTaula(fasearenEzaugarriak.length);
    lerroa.insertCell().innerHTML = taldeenMenua(baloratzekoTaldeak);
    
    
    const idEpaimahaikidea = await ep.getEpailearenEpaimahaiak();
    if(idEpaimahaikidea === null){
        document.body.innerHTML = "";
      const abisua = document.createElement('h1');
      abisua.innerHTML = "Fase honetan ezin duzu bozkatu";
      document.body.appendChild(abisua);
      const button = document.createElement('button');
      button.textContent = "Birkargatu";
      button.addEventListener('click', () => {
          window.location.href = './epaitu.html';
      });
      document.body.appendChild(button);
      return;
    }
    lerroa.insertCell().innerHTML = "<button id = 'ebaluazioaButton-"+idEpaimahaikidea+"'>Baloratu</button>";
    document.getElementById('ebaluazioaButton-'+idEpaimahaikidea).addEventListener('click', (event) => ebaluazioaSortu(event));}
function balorazioenTaula(i) {
    let balTaula = '<div class = inputContainer><table class = "inputTaula">';
    for (let j = 0; j < i; j++) {
        balTaula += `<tr><td><input type="number" required step = "any" name="balorazioa" placeholder="Balorazioa"></td></tr>`;
    }
    balTaula += '</table></div>';
    return balTaula;
}


function ezaugarrienTaula(fasearenEzaugarriak) {
    let taula = '<div class = inputContainer><table id="ezaugarrienTaula" class = "inputTaula">';

   
    fasearenEzaugarriak.forEach(ezaugarria => {
        taula += `<tr><td><div name="idEzaugarria" hidden data-idEzaugarria="${ezaugarria.idEzaugarria}"></div>${ezaugarria.izena}
</td></tr>`;
    });
    taula += '</table></div>';
    return taula;
}

function puntuazioTaula(fasearenEaugarriak, puntuak) {
   
    let taula = '<div class = "inputContainer"><table class = "inputTaula">';

   
    fasearenEaugarriak.forEach(ezaugarria => {
        if(puntuak === "puntuakMin")
        taula += `<tr><td>${ezaugarria.puntuakMin}</td></tr>`;
        else
        taula += `<tr><td>${ezaugarria.puntuakMax}</td></tr>`;
    });
    taula += '</table></div>';
    return taula;
}

function taldeenMenua(baloratzekoTaldeak) {
    try {
       
       
        let menuHTML = '<select id="taldeaMenua">\n';
        menuHTML += '  <option value="">Aukeratu talde bat</option>\n';
        baloratzekoTaldeak.forEach(taldea => {
            menuHTML += `  <option value="${taldea.idTaldea}">${taldea.izena}</option>\n`;
        });
        menuHTML += '</select>';
        return menuHTML;
    } catch (error) {
        console.error('Errorea: ', error);
        return '';
    }
}

