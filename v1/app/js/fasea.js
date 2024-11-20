const API_URL = 'http://localhost:3000';
import * as klaseak from "./klaseak.js";
//FASEAK LORTU
export const getFaseak = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(`${API_URL}/fasea/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const data = await response.json();
            const faseak = [];
            data.array.forEach(fasea => {
                faseak.push(new klaseak.Fasea(fasea.idFasea, fasea.idTxapelketa, fasea.kodea, fasea.izena, fasea.hasiera, fasea.amaiera, fasea.egoera, fasea.irizpidea));
            });
            return faseak;
        }
    } catch (err) {
        console.error(err);
    }
};

//FASEA SORTU
export const createNewFasea = async () => {
    const data = {
        idFasea: null,
        idTxapelketa: document.getElementById('idTxapelketa').value,
        kodea: document.getElementById('faseKodea').value,
        izena: document.getElementById('faseIzena').value,
        hasiera: document.getElementById('faseHasiera').value,
        amaiera: document.getElementById('faseAmaiera').value,
        egoera: "0",
        irizpidea: document.getElementById('faseIrizpidea').value
    };
    try {
        const response = await fetch(`${API_URL}/fasea/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log("fasea ondo sortu da");
            const responseData = await response.json();
            const idFasea = responseData.idFasea;
            document.getElementById('idFasea').value = idFasea;
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    } catch (err) {
        alert('Errorea');
        console.error(err);
    }
};
//FASEA EZABATU
export const deleteFasea = async (event) => {
    const idFasea = document.getElementById('idFasea').value;
    event.preventDefault();

    try {
        const response = await fetch(`${API_URL}/fasea/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(idFasea),
        });

        if (response.ok) {
            console.log('Fasea ezabatu da');
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    } catch (err) {
        console.log('Error.');
        console.error(err);
    }
};

//FASEA EGUNERATU
export const updateFasea = async (event) => {
    event.preventDefault();
    const data = {
        idFasea: document.getElementById('idFasea').value,
        idTxapelketa: document.getElementById('idTxapelketa').value,
        kodea: document.getElementById('kodea').value,
        izena: document.getElementById('izena').value,
        hasiera: document.getElementById('hasiera').value,
        amaiera: document.getElementById('amaiera').value,
        egoera: document.getElementById('egoera').value,
        irizpidea: document.getElementById('irizpidea').value
    };
    try {
        const response = await fetch(`${API_URL}/fasea/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Fasea eguneratua');
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    } catch (err) {
       
        console.error(err);
    }
};

//FASEA LORTU
export const getFasea = async () => {
    
    try {
        const response = await fetch(`${API_URL}/fasea/1`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
           return new klaseak.Fasea(data.idFasea, data.idTxapelketa, data.izena, data.kodea, data.egoera, data.hasiera, data.amaiera, data.irizpidea);


        }
        
} catch (err) {
    console.error(err);
}

};

//FASEAREN EZAUGARRIAK LORTU
export const getFasearenEzaugarriak = async () => {
    
    const idFasea = document.getElementById('idFasea').value;
    try {
        const response = await fetch(`${API_URL}/fasea/${idFasea}/ezaugarriak`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            const ezaugarriak = [];
            data.forEach(ezaugarri => {
                ezaugarriak.push(new klaseak.Ezaugarria(ezaugarri.idEzaugarria, ezaugarri.izena, ezaugarri.puntuakMax, ezaugarri.puntuakMin));
            });
            return ezaugarriak;
        }
    } catch (err) {
        console.error(err);
    }
};

export const getFaseAktiboa = async () => {
    
    try {
        const response = await fetch(`${API_URL}/fasea/lortu/aktiboa`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const data = await response.json();
            return new klaseak.Fasea(data[0].idFasea, data[0].idTxapelketa, data[0].izena, data[0].kodea, data[0].egoera, data[0].hasiera, data[0].amaiera, data[0].irizpidea);
        }
    } catch (err) {
        //console.error(err);
        return null;
    }
};