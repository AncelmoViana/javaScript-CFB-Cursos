class carro{
    constructor(pnome,ptipo){
        this.nome=pnome;
        if(ptipo==1){
            this.tipo="Esportivo";
            this.velmax = 300;
        }
        else if(ptipo==2){
            this.tipo="Utilitário";
            this.velmax = 100;
        }
        else if(ptipo==3){
            this.tipo="Passeio";
            this.velmax = 160;
        }
        else{
            this.tipo="Militar";
            this.velmax = 180;
        }
    }
    getNome(){
        return this.nome;
    }
    getTipo(){
        this.tipo;
    }
    getVelMax(){
        return this.velmax;
    }
    info(){
        console.log("Nome: "+ this.nome);
        console.log("Tipo: "+ this.tipo);
        console.log("V.Max: "+ this.velmax);
    }
    getInfo(){
        return [this.nome,this.tipo,this.velmax]
    }
}

let c1 = new carro("rapido", 1);
let c2 = new carro("Super Luxo", 2);
let c3 = new carro("bombadão", 4);
let c4 = new carro("Carrega tudo", 3);

console.log(c3.getInfo());


// console.log("Nome: "+c1.nome+" Tipo: "+c1.tipo+" Velocidade Maxima: "+c1.velmax);

// console.log("Nome: "+c2.nome+" Tipo: "+c2.tipo+" Velocidade Maxima: "+c2.velmax);


// console.log("Nome: "+c3.nome+" Tipo: "+c3.tipo+" Velocidade Maxima: "+c3.velmax);


// console.log("Nome: "+c4.nome+" Tipo: "+c4.tipo+" Velocidade Maxima: "+c4.velmax);







