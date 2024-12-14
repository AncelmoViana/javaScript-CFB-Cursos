const caixa=document.querySelector("#caixa")

let num = [5,6,10,55,62];

let cores = ["azul", "verde", "vermelho", "violeta", "preto", "branco";

cores.push("cinza");
cores.push("amareo");
cores.pop();
cores.pop();
cores.map((e,i)=>{
    let p =document.createElement("p");
    p.innerHTML=e;
    caixa.appendChild(p);
})




