const divTodos = [...document.getElementsByTagName("div")];

const cursosc1 = [...document.getElementsByClassName("c1")];

const cursosc2 = [...document.getElementsByClassName("c2")];

const cursoEspecial = document.querySelector("#c1");
cursoEspecial.innerHTML = "teste"

const query_divtodas = [...document.querySelectorAll("div,p")];
const query_cursosTodos = [...document.querySelectorAll(".curso")];

console.log(query_divtodas)
console.log(query_cursosTodos);




// console.log(divTodos);
// console.log(cursosc1);
// console.log(cursosc2);
// console.log(cursoEspecial);

cursosc2.map((el)=>{
    el.classList.add("destaque")
})