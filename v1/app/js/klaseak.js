export class Txapelketa  {
    constructor(idTxapelketa, lekua, izena, dataOrdua) {
        this.idTxapelketa = idTxapelketa;
        this.lekua = lekua;
       
        this.dataOrdua = dataOrdua;
        this.izena = izena;
        this.faseak = [];
    }
}

export class Fasea {
    constructor(idFasea, idTxapelketa, izena, kodea, egoera, hasiera, amaiera, irizpidea) {

        this.idFasea = idFasea;
        this.idTxapelketa = idTxapelketa;
        this.izena = izena;
        this.kodea = kodea;
        this.egoera = egoera;
        this.hasiera = hasiera;
        this.amaiera = amaiera;
        this.irizpidea = irizpidea;
        this.ezaugarriak = [];
        this.epaimahaikideak = [];
    }
}

export class Ezaugarria {
    constructor(idEzaugarria, izena, puntuakMax, puntuakMin, idFasea) {
        this.idEzaugarria = idEzaugarria;
        this.izena = izena;
        this.puntuakMax = puntuakMax;
        this.puntuakMin = puntuakMin;
        this.idFasea = idFasea;
    }
}

export class Epaimahaikidea {
    constructor(idEpaimahaikidea, username, idFasea) {
        this.idEpaimahaikidea = idEpaimahaikidea;
        this.username = username;
        this.idFasea = idFasea;
    }
}

export class user{
    constructor(username, email, password, role) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}