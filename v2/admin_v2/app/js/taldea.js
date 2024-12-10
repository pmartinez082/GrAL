const API_URL = 'http://192.168.137.1:3000';
import * as klaseak from "./klaseak.js";
export const getTaldeak = async () => {
    try {
        const response = await fetch(`${API_URL}/taldea/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            const data = await response.json();
            const taldeak = [];
            data.forEach(taldea => {
                taldeak.push(new klaseak.Taldea(taldea.idTaldea, taldea.izena, taldea.email, taldea.telefonoa, taldea.puntuakGuztira, taldea.egoera));
            });
            return taldeak;
        }
    } catch (err) {
        console.error(err);
    }
};

export const createNewTaldea = async (event) => {
    event.preventDefault
    const data = {
        izena: document.getElementById('izena').value,
        email: document.getElementById('email').value,
        telefonoa: document.getElementById('telefonoa').value,
        puntuakGuztira: 0,
        egoera: 0
    };
    if(!data.izena) return false;
    if(!data.telefonoa) data.telefonoa = "";
    try {
        const response = await fetch(`${API_URL}/taldea/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log("taldea ondo sortu da");
            const responseData = await response.json();
            const idTaldea = responseData.idTaldea;
            return idTaldea;
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
            return false;
        }
    } catch (err) {
        alert('Errorea');
        console.error(err);
    }
};

export const getTaldea = async () => {
    const id = document.getElementById('faseakTaula').getAttribute('data').split('-')[0];
    try {
        const response = await fetch(`${API_URL}/taldea/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
           return new klaseak.Taldea(data[0].idTaldea, data[0].izena, data[0].email, data[0].telefonoa, data[0].puntuakGuztira, data[0].egoera);    


        }
        
} catch (err) {
    console.error(err);
}

};

export const getBaloratuGabekoTaldeak = async (event) => {
   
    const idEpaimahaikidea = event.target.id.split('buttonTaldeak-')[1];
    try {
        const response = await fetch(`${API_URL}/taldea/${idEpaimahaikidea}/baloratu-gabekoak`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            const taldeak = [];
            data.forEach(taldea => {
                taldeak.push(new klaseak.Taldea(taldea.idTaldea, taldea.izena, taldea.email, taldea.telefonoa, taldea.puntuakGuztira, taldea.egoera));
            });
            return taldeak;
        }
        else{
            return [];
        }
    } catch (err) {
        console.error(err);
    }
};

export const updateTaldea = async (event) => {
    event.preventDefault();
    const data = {
        idTaldea: document.getElementById('idTaldea').value,
        izena: document.getElementById('izena').value,
        email: document.getElementById('email').value,
        telefonoa: document.getElementById('telefonoa').value,
        puntuakGuztira: document.getElementById('puntuakGuztira').value,
        egoera: document.getElementById('egoera').value
    };
    try {
        const response = await fetch(`${API_URL}/taldea/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log('Taldea eguneratua');
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    } catch (err) {
       
        console.error(err);
    }
};

export const deleteTaldea = async (event) => {
    const idTaldea = event.target.id.split('-')[1];
    event.preventDefault();

    try {
        const response = await fetch(`${API_URL}/taldea/delete/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({idTaldea:idTaldea}),
        });

        if (response.ok) {
            console.log('Taldea ezabatu da');
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    } catch (err) {
        console.log('Error.');
        console.log(err);
    }
};

export const getTaldearenEbaluazioak = async () => {
    
    const id = document.getElementById('idTaldea').value;
    try {
        const response = await fetch(`${API_URL}/taldea/${id}/ebaluazioak`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            const ebaluazioak = [];
            data.forEach(ebaluazioa => {
                ebaluazioak.push(new klaseak.Ebaluazioa(ebaluazioa.idEbaluazioa, ebaluazioa.idTxapelketa,  ebaluazioa.izena, ebaluazioa.hasiera, ebaluazioa.amaiera, ebaluazioa.egoera, ebaluazioa.irizpidea));
            });
            return ebaluazioak;
        }
    } catch (err) {
        console.error(err);
    }
};  

export const updateTaldeenEgoera = async () => {


    try {
        const response = await fetch(`${API_URL}/taldea-reset-egoera`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });

        if (response.ok) {
            console.log('Taldeen egoera reseteatu da');
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    } catch (err) {
        console.log('Error.');
        console.error(err);
    }
};

export const getTaldeAktiboak = async () => {
    try {
        const response = await fetch(`${API_URL}/taldea/get/aktiboak`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            const taldeak = [];
            data.forEach(taldea => {
                taldeak.push(new klaseak.Taldea(taldea.idTaldea, taldea.izena, taldea.email, taldea.telefonoa, taldea.puntuakGuztira, taldea.egoera));
            });
            return taldeak;
        }
    } catch (err) {
        console.error(err);
    }
};