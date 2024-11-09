function* frutas(){
    yield "Uva";
    yield "Laranja";
    yield "Maçã";
    yield "Abacate";
    yield "Goiaba";
    yield "Melão";
    yield "Ciriguela";
}
console.log("\n\nTreinando funções geradoras\n\n")
let ytp = frutas();
for(i=1; i<=7; i++){
    console.log(i)
    console.log(ytp.next().value);
}




console.log("\n\ntreinando for of \n\n")
let num = [0, 4, 5, 65, 78, 90]
for(v of num){
    console.log(v)
    
}

console.log("\n\nTreinando arrow functions e parametro rest \n\n")



let calcular = (...valores) => {
 let res = 0;
 for(v of valores){
    res += v;
 }
 return res;
}
console.log(calcular(50, 30))
