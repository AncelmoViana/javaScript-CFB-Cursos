function* perguntas(){
    const nome = yield "Qual seu nome?";

    const esporte =yield "Qual seu esporte favorito?";

    return "Seu nome é " + nome + ", Seu esporte favorito é " + esporte;
}

const itp = perguntas();
console.log(itp.next().value)
console.log(itp.next('Ancelmo').value);
console.log(itp.next('Natação').value);


function* contador(){
    let i=0;
    while(true){
        yield i++
    }
}
const itc = contador();
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)