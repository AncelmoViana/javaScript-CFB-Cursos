const caixaElementos = document.getElementById("caixaElementos");
const cursos = ["HTML", "CSS", "Javascript", "python", "MySQL"];

cursos.map((el, chave)=>{
  
    const novoElemento = document.createElement("div");
    novoElemento.innerHTML = el;
    caixaElementos.appendChild(novoElemento)
    novoElemento.setAttribute("class", "cursos")
    novoElemento.setAttribute("id", "c"+chave)


    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("id", "radio")
    radio.setAttribute("name", "radio")
    
    novoElemento.appendChild(radio);
  

    
})

const radioSelecionado=()=>{
    const todosCursos =[...document.querySelectorAll("input[type=radio]")]
      
    let radio = todosCursos.filter((el)=>{
        return el.checked;
    })
    return  radio[0];
    
    

}



const cursoSelecionado = document.getElementById("cursoSelecionado");

cursoSelecionado.addEventListener("click", (evt)=>{
    const rs = radioSelecionado();
    if(rs!=undefined){
        alert(rs.parentNode.firstChild.textContent)

    }
    else{
        alert("Selecione um Curso!")
    }

    


   

     
})

const apagarCurso = document.getElementById("apagarCurso");

apagarCurso.addEventListener("click", (evt)=>{
    let rs = radioSelecionado();
   
    if(rs!=undefined){
        rs = rs.parentNode
        rs.remove();
    }
    else{
        alert("Selecione um Curso")
    }

})