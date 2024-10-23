let dc1 = document.getElementById("c1");
let dc2 = document.getElementById("c2");
let dc3 = document.getElementById("c3");
let dc4 = document.getElementById("c4");
let dc5 = document.getElementById("c5");
let dc6 = document.getElementById("c6");




console.log(dc1)
console.log(dc1.id)
console.log(dc1.innerHTML)

dc1.innerHTML = "Testando alteraçao"

const arrayElementos = [dc1, dc2, dc3, dc4, dc5, dc6];

console.log(arrayElementos);

console.log("\n\nfor do array\n\n")

for(d of arrayElementos){
    console.log(d.innerHTML);
}

console.log("\n\nUsando o metodo map\n\n");

arrayElementos.map((e) => {
    console.log(e.innerHTML)
})