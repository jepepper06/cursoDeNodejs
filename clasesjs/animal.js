 class Animal{
    constructor(name,vive, muere, seReproduce){
        this.name = name;
        this.vive = vive;
        this.muere = muere;
        this.seReproduce = seReproduce;
    }

    seLaVie(){
        console.log(`${this.name} ${this.vive}, ${this.muere}, ${this.seReproduce}`);
    }
}

let amoeba = new Animal('Yo la amoeba','vivo en todos lados ','muero cuando tu sistema me ataca',' me divido y me reproduzco');

amoeba.seLaVie();