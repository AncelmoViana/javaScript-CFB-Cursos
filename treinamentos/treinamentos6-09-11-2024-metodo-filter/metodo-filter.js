const caixaElementos = document.getElementById("caixaElementos");
const cursos = ["HTML", "CSS", "Javascript", "python", "MySQL"];

 let indice = 0;
 const criarCurso = (curso)=>{
    const novoCurso = document.createElement("div");
    novoCurso.innerHTML = curso;
    novoCurso.setAttribute("id", "c"+indice);
    novoCurso.setAttribute("class", "cursos");
   

    const radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("class", "radio");
    radio.setAttribute("name", "radio")
    novoCurso.appendChild(radio);

    return novoCurso;
 }


cursos.map((el)=>{

    const novoElemento = criarCurso(el);

    caixaElementos.appendChild(novoElemento);
   
  

    
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


const adicionarAntes = document.getElementById("adicionarAntes");
const adicionarDepois = document.getElementById("adicionarDepois");
let nomeCurso = document.getElementById("nomeCurso");

adicionarAntes.addEventListener("click",(evt)=>{
    const rs = radioSelecionado();

    if(rs!=undefined){
        if(nomeCurso.value != ""){
            const cursoSelecionado = rs.parentNode;
            const addcurso = criarCurso(nomeCurso.value);
        
            caixaElementos.insertBefore(addcurso, cursoSelecionado)
    
        }
        else{
            alert("Adicionar nome do Curso")
        }
       
    }
    else{
        alert("Selecione um Curso")
    }



    
   
})


adicionarDepois.addEventListener("click",()=>{
    const rs = radioSelecionado();


    if(rs!=undefined){
        if(nomeCurso.value!=""){
            const cursoSelecionado = rs.parentNode.nextSibling;
            const addcurso = criarCurso(nomeCurso.value);
            caixaElementos.insertBefore(addcurso, cursoSelecionado)

        }
        else{
            alert("Adicionar nome do Curso")
        }
       
    }
    else{
        alert("Selecione um Curso")
    }

    
})

const desmarcar = document.getElementById("desmarcar");

desmarcar.addEventListener("click",()=>{
    const rs=radioSelecionado();
   
    if(rs!=undefined){
        rs.checked = false;
    }

})






