const caixaCursos = document.querySelector("#caixaCursos");

const btn_c = [...document.querySelectorAll(".cursos")];

const c1_2 = document.querySelector("#c1_2");

const cursos =["HTML","CSS","Javascript","PHP", "React","MySQL","ReactNative"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");

const btnRemoveCurso = document.getElementById("removerCurso")

cursos.map((el,chave)=>{
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id","c"+chave);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = el;

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");
  const rb=document.createElement("input");
  rb.setAttribute("type", "radio");
  rb.setAttribute("name", "rb_curso")

  comandos.appendChild(rb);
  novoElemento.appendChild(comandos);
  caixaCursos.appendChild(novoElemento)
})

const radioSelecionado=()=>{
  const todosRadios = [...document.querySelectorAll("input[type=radio]")];
  const radioSelecionado=todosRadios.filter((el)=>{
    return el.checked;
  })
  return radioSelecionado[0]

}

btnCursoSelecionado.addEventListener("click", (evt)=>{
  const rs = radioSelecionado();
 
  if(rs!=undefined){
 
    const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent;
    alert(cursoSelecionado)

  }
  else{
    alert("Selecione um curso!")
  }
 
 
})

btnRemoveCurso.addEventListener("click", (evt)=>{

  const rs = radioSelecionado();

  if(rs!=undefined){
   
    const rs = radioSelecionado();
    const cursoSelecionado=rs.parentNode.parentNode;
    cursoSelecionado.remove();
  }
  else{
    alert("Selecione um curso!")
  }
 

 

})