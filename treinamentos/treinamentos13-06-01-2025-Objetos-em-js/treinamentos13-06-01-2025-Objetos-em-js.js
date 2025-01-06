const arr = new Array(1,2,3);
const arr2 = new Array(4,5,6);

const data = new Date();

class cadeira{
    constructor(_cor){
        this.cor = _cor;
        this.data = new Date();
    }

    build(){
        console.log(`Uma cadeira ${this.cor} foi construida às ${this.data.toLocaleString()}`)
    }
}

const cadeira1 = new cadeira("azul")
const cadeira2 = new cadeira("vermelha")

cadeira1.build()
cadeira2.build()