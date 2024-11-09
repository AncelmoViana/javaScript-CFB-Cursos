const caixaElementos = document.getElementById("caixaElementos");
const cursos = ["HTML", "CSS", "Javascript", "python", "MySQL"];

cursos.map((el, chave)=>{
  
    const novoElemento = document.createElement("div");
    novoElemento.innerHTML = el;
    caixaElementos.appendChild(novoElemento)
    novoElemento.setAttribute("class", "cursos")
    novoElemento.setAttribute("id", "c"+chave)

    
})