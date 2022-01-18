 class Animal{
    constructor(name,vive, muere, seReproduce){
        this.name = name;
        this.vive = vive;
        this.muere = muere;
        this.seReproduce = seReproduce;
    }

    seLaVie(){
        console.log(`${this.name} ${this.vive},${this.seReproduce}, ${this.muere}`);
    }
}

let amoeba = new Animal('Yo la amoeba','vivo en todos lados ',' me divido y me reproduzco','muero cuando tu sistema me ataca',);

amoeba.seLaVie();