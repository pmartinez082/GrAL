
const API_URL = 'http://localhost:3000';
import * as klaseak from "./klaseak.js";
export const getEbaluazioak = async () => {
    try {
        const response = await fetch(`${API_URL}/ebaluazioa/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const data = await response.json();
            const ebaluazioak = [];
            data.array.forEach(ebaluazioa => {
                ebaluazioak.push(new klaseak.Ebaluazioa(ebaluazioa.idEbaluazioa, ebaluazioa.idTxapelketa, ebaluazioa.kodea, ebaluazioa.izena, ebaluazioa.hasiera, ebaluazioa.amaiera, ebaluazioa.egoera, ebaluazioa.irizpidea));
            });
            return ebaluazioak;
        }
    } catch (err) {
        console.error(err);
    }
};

export function getBaloratzekoEzaugarriak(){
    const baloratzekoEzaugarriak = document.getElementsByName('idEzaugarria');
    const baloratzekoEzaugarriakArray = [];
    var i = baloratzekoEzaugarriak.length;
    for(var j = 0; j < i; j++){
        baloratzekoEzaugarriakArray.push(baloratzekoEzaugarriak[j].getAttribute('data-idEzaugarria'));
    }
    console.log(baloratzekoEzaugarriakArray);
    return baloratzekoEzaugarriakArray;
}

export function getEzaugarrienBalorazioak(){
    const balorazioak = document.getElementsByName('balorazioa');
    const balorazioakArray = [];
    var i = balorazioak.length;
    for(var j = 0; j < i; j++){
        balorazioakArray.push(balorazioak[j].value);
    }
    console.log(balorazioakArray);
    return balorazioakArray;
}
    


export const createNewEbaluazioa = async (event) => {
    console.log("createNewEbaluazioa");
    event.preventDefault();
    const balorazioak = getEzaugarrienBalorazioak();
    const ezaugarriak = getBaloratzekoEzaugarriak();
    for(var i = 0; i < ezaugarriak.length; i++){
        if(balorazioak[i] === ""){
            console.log("Errorea");
            return;
        }
    
    const data = {
        idEbaluazioa: null,
        idEpaimahaikidea: "4",
        idEzaugarria: ezaugarriak[i],
        idTaldea: document.getElementById('taldeaMenua').value,
        puntuak: balorazioak[i],
        noiz: new Date()
    };
    console.log(data);
    try {
        const response = await fetch(`${API_URL}/ebaluazioa/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log("ebaluazioa ondo sortu da");
            const responseData = await response.json();
            const idEbaluazioa = responseData.idEbaluazioa;
            //document.getElementById('idEbaluazioa').value = idEbaluazioa;
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    }
    catch (err) {
        alert('Errorea');
        console.error(err);
    }
}

};

