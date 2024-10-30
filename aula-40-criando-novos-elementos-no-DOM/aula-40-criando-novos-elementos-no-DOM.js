const caixa1 = document.querySelector("#caixa1");
const cursos = [...document.querySelectorAll(".curso")];


const c1_2 = document.getElementById("c1_2");

console.log("first element child " + caixa1.firstElementChild.innerHTML)
console.log("Parent Element "+ caixa1.parentElement)


console.log(caixa1.hasChildNodes())
console.log(cursos[0].hasChildNodes())

// if(cursos[0].children.length > 0){
//     console.log("Possui filhos")
// }
// else{
//     console.log("Não possui filhos")
// }
// console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")

// console.log(cursos[0].children.length > 0 ? "Possui filhos" : "Não possui filhos")

// console.log(caixa1.firstElementChild.innerHTML = "Teste")

// console.log(caixa1.children[3].innerHTML = "Teste")



console.log(c1_2.parentNode.parentNode.children[0])




