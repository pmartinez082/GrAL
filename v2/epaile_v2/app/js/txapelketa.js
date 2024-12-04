import * as klaseak from './klaseak.js';
import {createClassesFromDataF} from './fasea.js' ;
const API_URL = 'http://192.168.1.140:3000'



/********************************************************************************
TXAPELKETA
*/
 

//TXAPELKETAK LORTU
export const getTxapelketak = async () => {
    
    try {
        const response = await fetch(`${API_URL}/txapelketa/`, {    
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            const txapelketak = [];
            data.forEach(txapelketa => {
                txapelketak.push(new klaseak.Txapelketa(txapelketa.idTxapelketa, txapelketa.lekua, txapelketa.izena, txapelketa.dataOrdua));  
            
        });
        return txapelketak;
    }}
        catch (err) {
        console.error(err);
    }
};

//TXAPELKETA SORTU
export const createNewTxapelketa = async (event) => { 
    const data = {
        idTxapelketa: null,
        lekua: document.getElementById('lekua').value,
        dataOrdua: document.getElementById('dataOrdua').value,
        izena: document.getElementById('txapelketaIzena').value,
    };
    event.preventDefault();

    try {
        const response = await fetch(`${API_URL}/txapelketa/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {

            const responseData = await response.json();
            const idTxapelketa = responseData.idTxapelketa;
            document.getElementById('idTxapelketa').value = idTxapelketa;

            console.log("Txapelketa ondo sortu da");
        } else {
            const error = await response.json();
            alert(`Error: ${error.error}`);
        }
    } catch (err) {
        console.error(err);
    }
};


//TXAPELKETA EGUNERATU
export const updateTxapelketa = async (event) => {  
    event.preventDefault();
    const data = {
        idTxapelketa: document.getElementById('idTxapelketa').value,
        lekua: document.getElementById('lekua').value,
        dataOrdua: document.getElementById('dataOrdua').value,
        izena: document.getElementById('txapelketaIzena').value,
    };
    try {
        const response = await fetch(`${API_URL}/txapelketa/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            console.log("txapelketa eguneratua");
        } else {
            const error = await response.json();
            console.log(`Error: ${error.error}`);
        }
    } catch (err) {
        console.error(err);
    }
};




//TXAPELKETA LORTU
export const getTxapelketa = async () => {             
    
    const idTxapelketa = document.getElementById('idTxapelketa').value;
    try {
        const response = await fetch(`${API_URL}/txapelketa/${idTxapelketa}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
           return new klaseak.Txapelketa(data.idTxapelketa, data.lekua, data.izena, data.dataOrdua);

        }
        
} catch (err) {
    console.error(err);
}

};

//TXAPELKETA EZABATU
export const deleteTxapelketa = async (event) => {

event.preventDefault();
const idTxapelketa = document.getElementById('idTxapelketa').value;
  try {
    const response = await fetch(`${API_URL}/txapelketa/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(idTxapelketa),
    });

    if (response.ok) {
      console.log('txapelketa ezabatu da');
    } else {
      const error = await response.json();
      alert(`Error: ${error.error}`);
    }
  } catch (err) {
    alert('Error en la conexión con el servidor.');
    console.error(err);
  }
};

//TXAPELKETAREN FASEAK LORTU
export const getTxapelketarenFaseak = async () => {
    
    const idTxapelketa = document.getElementById('idTxapelketa').value;
    try {
        const response = await fetch(`${API_URL}/txapelketa/${idTxapelketa}/faseak`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            const faseak = [];
            data.forEach(fase => {
                faseak.push(new klaseak.Fasea(fase.idFasea, fase.idTxapelketa, fase.izena, fase.egoera, fase.hasiera, fase.amaiera, fase.irizpidea));
            });
            return faseak;
        }
    } catch (err) {
        console.error(err);
    }
};

export const getInfoGuztia = async () => {
    
    try {
        const response = await fetch(`${API_URL}/txapelketa/lortu/info-guztia`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
           
            return createClassesFromData(data);
        }
    } catch (err) {
        console.error(err);
    }
};

export const getTxapelketarenInfoGuztia = async () => {
    
    try {
        const idTxapelketa = document.getElementById('idTxapelketa').value;
        const response = await fetch(`${API_URL}/txapelketa/lortu/info-guztia/${idTxapelketa}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
           
            return createClassesFromData(data);
        }
    } catch (err) {
        console.error(err);
    }
};
function createClassesFromData(data) {
    const txapelketak = data.map(txData => {
        const txapelketa = new klaseak.Txapelketa(
            txData.idTxapelketa,
            txData.txapelketaLekua,
            txData.txapelketaIzena,
            txData.txapelketaData
            
        );

        txData.faseak.forEach(faseData => {
            const fase = new klaseak.Fasea(
                faseData.idFasea,
                txData.idTxapelketa,
                faseData.faseIzena,
                faseData.faseKodea,
                faseData.faseEgoera,
                faseData.faseHasiera,
                faseData.faseAmaiera,
                faseData.faseIrizpidea

            );

            faseData.ezaugarriak.forEach(ezaugarriaData => {
                const ezaugarria = new klaseak.Ezaugarria(
                    ezaugarriaData.idEzaugarria,
                    ezaugarriaData.ezaugarriaIzena,
                    null,
                    null
                );
                fase.ezaugarriak.push(ezaugarria);
            });

            faseData.epaimahaikideak.forEach(epaimahaikideaData => {
                const epaimahaikidea = new klaseak.Epaimahaikidea(
                    epaimahaikideaData.idEpaimahaikidea,
                    epaimahaikideaData.epaimahaikideaUsername,
                    faseData.idFasea
                );
                fase.epaimahaikideak.push(epaimahaikidea);
            });

            txapelketa.faseak.push(fase);
        });

        return txapelketa;
    });

    return txapelketak;
}

export const getTxapelketaAktiboarenInfo = async (req, res) => {
    try {
        const response = await fetch(`${API_URL}/txapelketa/lortu/aktiboaren-info-guztia`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            return createClassesFromDataF(data);
        }

    } catch (error) {
        console.error(error);
    }
};