const cursos = [...document.querySelectorAll(".curso")];
const cursos2 = [...document.querySelectorAll(".curso2")];
const botaoCopiar = document.getElementById('botao-copiar');
const botaoLimpar = document.getElementById('botao-limpar')
let c1 = document.getElementById('c1');
let c2 = document.getElementById('c2');
let c3 = document.getElementById('c3');
let c4 = document.getElementById('c4');
let c5 = document.getElementById('c5');
let c6 = document.getElementById('c6');

let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');
let d5 = document.getElementById('d5');
let d6 = document.getElementById('d6');


cursos.map((e)=>{
    e.addEventListener("click", (evt)=>{
    e.classList.add("destaque");
    console.log(e.innerHTML + " Foi Clicado ");
    
  
    })
     botaoCopiar.addEventListener("click", ()=>{

        e.classList.remove("destaque");
        

        if(c1.classList.contains("c--1")){
            d1.innerHTML = c1.innerHTML;
            d1.style.display = "flex"
        }
        if(c2.classList.contains("c--2")){
            d2.innerHTML = c2.innerHTML;
            d2.style.display = "flex"
        }
        if(c3.classList.contains("c--3")){
            d3.innerHTML = c3.innerHTML;
            d3.style.display = "flex";
        }
        if(c4.classList.contains("c--4")){
            d4.innerHTML = c4.innerHTML;
            d4.style.display = "flex"
        }
        if(c5.classList.contains("c--5")){
            d5.innerHTML = c5.innerHTML;
            d5.style.display = "flex"
        }
        if(c6.classList.contains("c--6")){
            d6.innerHTML = c6.innerHTML;
            d6.style.display = "flex"
        }
    })
    botaoLimpar.addEventListener("click", ()=>{
        e.classList.remove("destaque");

       c1.classList.remove("c--1")
       d1.style.display = "none";

       c2.classList.remove("c--2")
       d2.style.display = "none";

       c3.classList.remove("c--3")
       d3.style.display = "none";

       c4.classList.remove("c--4")
       d4.style.display = "none";

       c5.classList.remove("c--5")
       d5.style.display = "none";

       c6.classList.remove("c--6")
       d6.style.display = "none";

      
    })
    

    c1.addEventListener("click", ()=>{
        c1.classList.add("c--1")
    })
    c2.addEventListener("click", ()=>{
        c2.classList.add("c--2")
    })
    c3.addEventListener("click", ()=>{
        c3.classList.add("c--3");
    })
    c4.addEventListener("click", ()=>{
        c4.classList.add("c--4");
    })
    
    c5.addEventListener("click", ()=>{
        c5.classList.add("c--5");
    })
    c6.addEventListener("click", ()=>{
        c6.classList.add("c--6");
    })
})








