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
        return this.sejourDecore.prix()+100
    }
}

class SejourAvecResto extends SejourAvecOption{
    prix() : number{
        return super.prix()+100
    }
}
const sejourSimple = new sejour();
console.log("Prix du sejour simple : ", sejourSimple.prix());