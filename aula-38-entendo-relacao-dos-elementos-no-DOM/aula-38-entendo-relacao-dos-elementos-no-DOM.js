const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");

const cursos = [...document.querySelectorAll(".curso")];


 cursos.map((e)=>{
    e.addEventListener("click", (evento)=>{
        evento.stopPropagation();
        
    })
 })
 caixa1.addEventListener("click", (evento)=>{
    console.log("clicou")
})

