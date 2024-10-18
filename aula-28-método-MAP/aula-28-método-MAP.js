function* cores(){
    yield "Vermelho";
    yield "Verde";
    yield "Azul";
}

const itc = cores();
console.log("Primeira chamada da função")
console.log(itc.next().value);

console.log("Segunda chamada da função")
console.log(itc.next().value);

console.log("Terceira chamada da função")
console.log(itc.next().value);


