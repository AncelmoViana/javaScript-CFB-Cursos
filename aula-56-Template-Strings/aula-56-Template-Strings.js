const caixa=document.querySelector("#caixa")

const carros = ["polo","T-cross", "golf", "hrv"];

let ul = `<ul>`;
carros.map((el)=>{
    ul+=`<li>${el}<li>`;
})
ul+=`<\ol>`
caixa.innerHTML = ul

caixa.innerHTML = frase






