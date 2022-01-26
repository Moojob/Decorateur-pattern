interface ISejour{
    prix(): number
}

class sejour implements ISejour{
    public prix() : number {
        return 200  
    }
}


class SejourAvecOption implements ISejour{
    sejourDecore : ISejour;
    constructor(_unSejourDecore : ISejour){
        this.sejourDecore = _unSejourDecore
    }
    prix(): number{
        return this.sejourDecore.prix()
    }
}

class SejourAvecResto extends SejourAvecOption{
    prix() : number{
        return super.prix()+100
    }
}

class SejourAvecPiscine extends SejourAvecOption{
    prix() : number{
        return super.prix() + 50
    }
}

class SejourAvecSport extends SejourAvecOption{
    prix() : number{
        return super.prix() + 150
    }
}



const sejourSimple = new sejour();
console.log("Prix du sejour simple : ", sejourSimple.prix());

const sejour1 = new SejourAvecResto(sejourSimple);
console.log("Prix du sejour avec Resto : ", sejour1.prix());

const sejour2 = new SejourAvecPiscine(sejourSimple);
console.log("Prix du sejour avec Piscine : ", sejour2.prix());

const sejour3 = new SejourAvecResto(sejour2);
console.log("Prix du sejour avec Piscine et Resto : ", sejour3.prix());

const sejour4 = new SejourAvecPiscine(sejour1);
console.log("Prix du sejour avec Resto et Piscine: ", sejour4.prix());

const sejour5 = new SejourAvecSport(new SejourAvecResto(new sejour()));
console.log("Prix du sejour avec Resto et Sport: ", sejour5.prix());