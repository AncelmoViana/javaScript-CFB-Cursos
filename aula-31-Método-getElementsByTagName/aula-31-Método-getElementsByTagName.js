let dc1 = document.getElementById("c1");
let dc2 = document.getElementById("c2");
let dc3 = document.getElementById("c3");
let dc4 = document.getElementById("c4");
let dc5 = document.getElementById("c5");
let dc6 = document.getElementById("c6");
const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6]

let colecaoHTML=[...document.getElementsByTagName("div")];
console.log(colecaoHTML);
console.log(arrayElementos);

console.log("\n\nUsando o metodo map\n\n")
colecaoHTML.map((e)=>{
    console.log(e.innerHTML);
})