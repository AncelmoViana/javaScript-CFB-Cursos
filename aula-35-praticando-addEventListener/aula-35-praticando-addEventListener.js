const cursos = [...document.querySelectorAll(".curso")];
const botao = document.getElementById('botao');

cursos.map((e)=>{
    e.addEventListener("click", (evt)=>{
    e.classList.add("destaque");
    console.log(e.innerHTML + " Foi Clicado ");
    })
})

botao.addEventListener("click", ()=>{
    console.log(botao.parentElement )
})
