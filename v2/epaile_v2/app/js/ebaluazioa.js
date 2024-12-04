
const API_URL = 'http://192.168.1.140:3000';
import * as klaseak from "./klaseak.js";
import { getEpailearenEpaimahaiak } from './epaimahaikidea.js';
import { autentifikatu } from "./user.js";
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
                ebaluazioak.push(new klaseak.Ebaluazioa(ebaluazioa.idEbaluazioa, ebaluazioa.idTxapelketa, ebaluazioa.izena, ebaluazioa.hasiera, ebaluazioa.amaiera, ebaluazioa.egoera, ebaluazioa.irizpidea));
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
    event.preventDefault();
    console.log("createNewEbaluazioa");
    event.preventDefault();
    const balorazioak = getEzaugarrienBalorazioak();
    const ezaugarriak = getBaloratzekoEzaugarriak();
    for(var i = 0; i < ezaugarriak.length; i++){
        if(balorazioak[i] === ""){
            console.log("Errorea");
            return;
        }
   console.log(event.target.id);
    const data = {
        idEpaimahaikidea: event.target.id.split('ebaluazioaButton-')[1],
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


export const getEpailearenEbaluazioakFaseka = async (event) => {
    event.preventDefault();
    const idEpaimahaikidea = event.target.id.split('buttonEpaimahaikidea-')[1];   
    try {
        const response = await fetch(`${API_URL}/ebaluazioa/get/EpailearenEbaluazioakFaseka/${idEpaimahaikidea}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
           
        });
        if (response.ok) {
            const ebaluazioak = await response.json();
            console.log(ebaluazioak);
            if (ebaluazioak.length === 0) {
                return [];
            }
            
            const ebaluazioakArray = [];
            ebaluazioak.forEach(ebaluazioa => {
                ebaluazioakArray.push(new klaseak.Ebaluazioa(ebaluazioa.idEbaluazioa, ebaluazioa.idEpaimahaikidea, ebaluazioa.idTaldea, ebaluazioa.idEzaugarria, ebaluazioa.puntuak, ebaluazioa.noiz));
            });
            console.log(ebaluazioakArray);
            return ebaluazioakArray;
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    }
    catch (err) {
        alert('Errorea');
        console.error(err);
    }
};