const caixaElementos=document.getElementById("caixaElementos");
const cursos= ["test1", "teste2"];


let indice = 0;
const criarCursos=(curso)=>{
    const novoElemento = document.createElement("div");
    novoElemento.setAttribute("id", "c"+indice);
    novoElemento.setAttribute("class", "cursos")
    novoElemento.innerHTML = curso;

    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("class", "radio");
    radio.setAttribute("name", "radio")
    novoElemento.appendChild(radio);

    return novoElemento;

    

   
}

cursos.map((el)=>{
    const novoElemento = criarCursos(el);
    caixaElementos.appendChild(novoElemento);
    indice++;

   
})


const radioSelecionado =()=>{
    let todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radio = todosRadios.filter((el)=>{
       return el.checked
      
    })
    return radio[0];
    
    
    
}
 const cursoSelecionado = document.getElementById("cursoSelecionado");

 cursoSelecionado.addEventListener("click",()=>{
    rs = radioSelecionado();
    const cursoSelect = rs.parentNode.textContent

    alert(cursoSelect)
 })



