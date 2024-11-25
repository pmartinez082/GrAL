const API_URL = 'http://localhost:3000';
import * as klaseak from './klaseak.js';
function getEpaimahaikideakArray(){
   const epaimahaikideakCheck = document.getElementsByName('checkbox');
   const epaimahaikideak = [];
   const idFasea = document.getElementById('idFasea').value;
   epaimahaikideakCheck.forEach(e => {
       if (e.checked) {
           epaimahaikideak.push(new klaseak.Epaimahaikidea(0, e.value, idFasea));
       }
   });
   return epaimahaikideak;
}

export const getEpaimahaikideak = async (event) => {
    event.preventDefault();

    try {
        const response = await fetch(`${API_URL}/epaimahaikidea/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const data = await response.json();
            const epaimahaikideak = [];
            data.array.forEach(epaimahaikide => {
                epaimahaikideak.push(new klaseak.Epaimahaikidea(epaimahaikide.idEpaimahaikidea, epaimahaikide.username, epaimahaikide.idFasea));
            });
            return faseak;
        }
    } catch (err) {
        console.error(err);
    }
};


export const createNewEpaimahaikidea = async () => {
    var i = 0;
    while (i < getEpaimahaikideakArray().length) {
        if (getEpaimahaikideakArray()[i].idEpaimahaikidea === null) {
            break;
        }
        const data = {
           
            username: getEpaimahaikideakArray()[i].username,
            idFasea: document.getElementById('idFasea').value
        };
        try {
            const response = await fetch(`${API_URL}/epaimahaikidea/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                
                const responseData = await response.json();
                const idEpaimahaikidea= responseData.idEpaimahaikidea;
            
                console.log("epaimahaikidea ondo sortu da");
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

export const getEpailearenEpaimahaiak = async (username) => {
    const data = {
        username: username,
        idFasea: document.getElementById('idFasea').value,
        idEzaugarria: document.getElementById('idEzaugarria').value
    };
    try {
        const response = await fetch(`${API_URL}/epaimahaikidea/getEpailearenEpaimahaiak`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data[0].idEpaimahaikidea;
        }
    } catch (err) {
        console.error(err);
    }
};