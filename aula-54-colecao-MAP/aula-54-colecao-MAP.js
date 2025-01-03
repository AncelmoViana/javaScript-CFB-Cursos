const caixa=document.querySelector("#caixa")


let mapa = new Map();
mapa.set("Curso", "Javascript");
mapa.set(10, "CFB Cursos");
mapa.set(1,100);
mapa.set("canal", 100);
console.log(mapa)
let pes = 10;
if(mapa.has(pes)){
    caixa.innerHTML = "A chave existe na coleçao com o Valor: "+mapa.get(pes);
}
else{
    caixa.innerHTML = "A chave não existe na coleção";
}

mapa.forEach((el)=>{
    console.log(el)
})






