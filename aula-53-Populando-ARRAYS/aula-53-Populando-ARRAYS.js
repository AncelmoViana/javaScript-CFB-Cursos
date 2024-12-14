const caixa=document.querySelector("#caixa")

let num = [5,6,10,55,62, "teste"];

let cores = ["azul", "verde", "vermelho", "violeta", "preto", "branco", num];

// cores.push("cinza");
// cores.push("amareo");
// cores.pop();
// cores.pop();
console.log(cores[6][5])
cores.map((e,i)=>{
    let p =document.createElement("p");
    p.innerHTML=e;
    caixa.appendChild(p);
})




