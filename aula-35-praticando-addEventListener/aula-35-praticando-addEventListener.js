// const c1 = document.querySelector("#c1")
const cursos = [...document.querySelectorAll(".curso")];

// const msg =()=>{
//     alert("Voce clicou")
// }

// c1.addEventListener("click", (evt)=>{alert('Você Clicou')
//     const el = evt.target;
//     el.classList.add("destaque")
// })

cursos.map((e)=>{
    e.addEventListener("click", (evt)=>{
    e.classList.add("destaque");
    console.log(e.innerHTML + " Foi Clicado ");
    })
})