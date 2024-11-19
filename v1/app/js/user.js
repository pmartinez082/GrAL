import * as klaseak from './klaseak.js';
const API_URL = 'http://localhost:3000';
export const getEpaileak = async () => {
    try {
        const response = await fetch(`${API_URL}/user/role/epaileak`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            
        });
        if (response.ok) {
            const data = await response.json();
            const epaileak = [];
            data.forEach(epaile => {
                epaileak.push(new klaseak.user(epaile.username, epaile.email, epaile.password, epaile.role));
                
            });
            console.log(epaileak);
            return epaileak;
        }
    } catch (err) {
        console.error(err);
    }
};