import * as f from "./fasea.js";
import * as eb from "./ebaluazioa.js";
import * as t from "./taldea.js";
import * as u from "./user.js";
import * as ep from "./epaimahaikidea.js"

export async function ebaluazioaSortu(event){
    event.preventDefault();
    const ebaluazioaForm1 = document.getElementById('ebaluazioaForm');
    event.preventDefault();
    await eb.createNewEbaluazioa(event);
    document.getElementById('ebaluazioaTaula').innerHTML = "";
    ebaluazioaForm1.reset();
    document.getElementById('ebaluazioaButton').hidden = true;
    
    const hurrengoButton = document.getElementById('hurrengoaButton');
    hurrengoButton.hidden = false;
    hurrengoButton.addEventListener('click', ebaluazioaForm);
 


}

export async function ebaluazioaForm(){
   

    const fase = await f.getFaseAktiboa();
    if (fase == null) {
        const abisua = document.createElement('h1');
        abisua.innerHTML = "Oraindik ez da fasea hasi";
        document.body.appendChild(abisua);
        return;
    }
  
    document.getElementById('idFasea').value = fase.idFasea;
    console.log(document.getElementById('idFasea').value);
    console.log(fase);
    const taula = document.getElementById('ebaluazioaTaula');
    taula.innerHTML = "";
    const baloratzekoTaldeak = await t.getBaloratuGabekoTaldeak();
    if(baloratzekoTaldeak === null){
        const abisua = document.createElement('h1');
        abisua.innerHTML = "Talde guztiak baloratu dira";
        document.body.appendChild(abisua);
        document.getElementById('ebaluazioaForm').reset();
        return;
    }
    const zutabe = taula.insertRow();
    zutabe.insertCell().textContent = "Fasea";
    zutabe.insertCell().textContent = "Ezaugarriak";
    zutabe.insertCell().textContent = "Balorazioa";
    zutabe.insertCell().textContent = "Taldea";
    zutabe.insertCell().textContent = "Ekintza"
    const fasearenEzaugarriak = await f.getFasearenEzaugarriak();

    const lerroa = taula.insertRow();
    lerroa.insertCell().textContent = fase.izena;
    lerroa.insertCell().innerHTML = ezaugarrienTaula(fasearenEzaugarriak);
    lerroa.insertCell().innerHTML = balorazioenTaula(fasearenEzaugarriak.length);
    lerroa.insertCell().innerHTML = taldeenMenua(baloratzekoTaldeak);
    
    
    const idEpaimahaikidea = await ep.getEpailearenEpaimahaiak();
    if(idEpaimahaikidea === null){
        document.body.innerHTML = "";
      const abisua = document.createElement('h1');
      abisua.innerHTML = "Fase honetan ezin duzu bozkatu";
      document.body.appendChild(abisua);
      return;
    }
    lerroa.insertCell().innerHTML = "<button id = 'ebaluazioaButton-"+idEpaimahaikidea+"'>Baloratu</button>";

}
function balorazioenTaula(i) {
    let balTaula = '<table>';
    balTaula += '<td></td>';
    for (let j = 0; j < i; j++) {
        balTaula += `<tr><td><input type="number" step = "any" name="balorazioa" placeholder="Balorazioa"></td></tr>`;
    }
    balTaula += '</table>';
    return balTaula;
}


function ezaugarrienTaula(fasearenEzaugarriak) {
    let taula = '<table id="ezaugarrienTaula">';
    taula += '<tr><th>Ezaugarria</th><th>Puntuak min</th><th>Puntuak max</th></tr>';
    fasearenEzaugarriak.forEach(ezaugarria => {
        taula += `<tr><td><div name="idEzaugarria" hidden data-idEzaugarria="${ezaugarria.idEzaugarria}"></div>
${ezaugarria.izena}</td><td>${ezaugarria.puntuakMin}</td><td>${ezaugarria.puntuakMax}</td></tr>`;
    });
    taula += '</table>';
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

