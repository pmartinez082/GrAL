const API_URL = 'http://localhost:3000';
import * as klaseak from './klaseak.js';
export function getEzaugarriakArray(){
    const idFasea = document.getElementById('idFasea').value;
    const ezaugarriak = [];
    const ezaugarriaIzena = document.getElementsByName('ezaugarriaIzena');
    const eMin = document.getElementsByName('ezaugarriaMin');
    const eMax = document.getElementsByName('ezaugarriaMax');
    for (var i = 0; i < ezaugarriaIzena.length; i = i+1) {
        if (ezaugarriaIzena[i].value !== "" && eMin[i].value !== "" && eMax[i].value !== "") {
            ezaugarriak.push(new klaseak.Ezaugarria(0,ezaugarriaIzena[i].value, eMin[i].value, eMax[i].value, idFasea));
        }
    }
    return ezaugarriak;
}


export const getEzaugarriak = async (event) => {
    event.preventDefault();
    try {
        const response = await fetch(`${API_URL}/ezaugarria/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const data = await response.json();
            const ezaugarriak = [];
            data.array.forEach(ezaugarria => {
                ezaugarriak.push(new klaseak.Ezaugarria(ezaugarria.idEzaugarria, ezaugarria.izena, ezaugarria.puntuakMax, ezaugarria.puntuakMin));
            });
            return ezaugarriak;
        }
    } catch (err) {
        console.error(err);
    }
};

//EZAUGARRIA SORTU
export const createNewEzaugarria = async () => {
    var i = 0;
    while (i < getEzaugarriakArray().length) {
        if (getEzaugarriakArray()[i].idEzaugarria === null) {
            break;
        }
        const data = {
            idEzaugarria: null,
            izena: getEzaugarriakArray()[i].izena,
            puntuakMin: getEzaugarriakArray()[i].puntuakMin,
            puntuakMax: getEzaugarriakArray()[i].puntuakMax,
            idFasea: document.getElementById('idFasea').value   
        };
        try {
            const response = await fetch(`${API_URL}/ezaugarria/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                
                const responseData = await response.json();
                const idEzaugarria= responseData.idEzaugarria;
            
                console.log("ezaugarria ondo sortu da");
            } else {
                const error = await response.json();
                console.log(`Error: ${error.error}`);
            }
        } catch (err) {
            alert('Errorea');
            console.error(err);
        }
        i = i + 1;
    }
};