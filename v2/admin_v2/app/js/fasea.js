const API_URL = 'http://192.168.13.117:3000';
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


export const getFasearenEpaimahaikideakEzaugarriak = async () => {
    try {
        const response = await fetch(`${API_URL}/fasea/lortu/epaimahaikideak-ezaugarriak`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            return createClassesFromDataF(data);

                    }
    } catch (err) {
        console.error(err);
    }
};

export function createClassesFromDataF(data) {
    const faseak = [];

    const faseMap = data.reduce((map, item) => {
        if (!map[item.idFasea]) {
            map[item.idFasea] = {
                idFasea: item.idFasea,
                faseIzena: item.faseIzena,
                irizpidea: item.irizpidea,
                egoera: item.egoera,
                hasiera: item.hasiera,
                amaiera: item.amaiera,
                ezaugarriak: [],
                epaimahaikideak: []
            };
        }
        if (item.idEzaugarria && !map[item.idFasea].ezaugarriak.find(e => e.idEzaugarria === item.idEzaugarria)) {
            map[item.idFasea].ezaugarriak.push({
                idEzaugarria: item.idEzaugarria,
                ezaugarriIzena: item.ezaugarriIzena
            });
        }

        
        if (item.idEpaimahaikidea && !map[item.idFasea].epaimahaikideak.find(ep => ep.idEpaimahaikidea === item.idEpaimahaikidea)) {
            map[item.idFasea].epaimahaikideak.push({
                idEpaimahaikidea: item.idEpaimahaikidea,
                username: item.username
            });
        }

        return map;
    }, {});
   
    
    for (const key in faseMap) {
        const faseData = faseMap[key];
        const fase = new klaseak.Fasea(
            faseData.idFasea,
            null, 
            faseData.faseIzena,
            null,
            faseData.egoera,
            faseData.hasiera,
            faseData.amaiera,
            faseData.irizpidea
        );

        faseData.ezaugarriak.forEach(ezData => {
            const ezaugarria = new klaseak.Ezaugarria(
                ezData.idEzaugarria,
                ezData.ezaugarriIzena,
                null,
                null
            );
            fase.ezaugarriak.push(ezaugarria);
        });

        faseData.epaimahaikideak.forEach(epData => {
            const epaimahaikidea = new klaseak.Epaimahaikidea(
                epData.idEpaimahaikidea,
                epData.username,
                faseData.idFasea
            );
            fase.epaimahaikideak.push(epaimahaikidea);
        });

        faseak.push(fase);
    }

    return faseak;
}


export const egoeraAldatu = async (event) => {
  
    const data = {
        idFasea: event.target.id.split('buttonEgoera-')[1],
        egoera: event.target.textContent === 'Hasi' ? "1" : "2",
    };
    try {
        const response = await fetch(`${API_URL}/fasea/egoeraAldatu`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            console.log('Fasea egoera aldatu da');
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    } catch (err) {
        alert('Errorea');
        console.error(err);
    }
};