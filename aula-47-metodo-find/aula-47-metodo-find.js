const caixaCursos = document.querySelector("#caixaCursos");

const btn_c = [...document.querySelectorAll(".cursos")];

const c1_2 = document.querySelector("#c1_2");

const cursos =["HTML","CSS","Javascript","PHP", "React","MySQL","ReactNative"];
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado");

const btnRemoveCurso = document.getElementById("removerCurso");

const btnAdicionarNovoAntes = document.getElementById("btnAdicionarNovoAntes");
const btnAdicionarNovoDepois = document.getElementById("btnAdicionarNovoDepois");
const nomeCurso = document.getElementById("nomeCurso");


let indice = 0;

const tirarSelecao=()=>{
  const cursosSelecionados=[...document.querySelectorAll(".selecionado")];
  cursosSelecionados.map((el)=>{
    
    el.classList.remove("selecionado")
  })
}

const criarNovoCurso=(curso)=>{
  const novoElemento = document.createElement("div");
  novoElemento.setAttribute("id","c"+indice);
  novoElemento.setAttribute("class", "curso c1");
  novoElemento.innerHTML = curso;
  novoElemento.addEventListener("click",(evt)=>{
    tirarSelecao();
    evt.target.classList.toggle("selecionado")
  })

  const comandos = document.createElement("div");
  comandos.setAttribute("class", "comandos");
  
  return novoElemento;

}

cursos.map((el,chave)=>{

  const novoElemento = criarNovoCurso(el);


  caixaCursos.appendChild(novoElemento)
  indice++;
})

const cursoSelecionado=()=>{
  const cursosSelecionados=[...document.querySelectorAll(".selecionado")];
  return cursosSelecionados[0];

} 

btnCursoSelecionado.addEventListener("click", (evt)=>{

 try{
  alert("Curso Selecionado: "+cursoSelecionado().innerHTML)
 }catch(ex){
  alert("Selecione um curso")
 }
 
 
})

btnRemoveCurso.addEventListener("click", (evt)=>{
  const rs = cursoSelecionado();

  if(rs!=undefined){
   
    rs.remove();
  }
  else{
    alert("Selecione um curso!")
  }
 

 

})

btnAdicionarNovoAntes.addEventListener("click", (evt)=>{
  const rs = cursoSelecionado();
 
  if(rs!=undefined){
    if(nomeCurso.value != ""){
    
      const novoCurso=criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado())
     
    }
    
    else{
      alert("Adicionar nome do curso!")
      
    }
  
    

  }
  else{
    alert("Selecione um curso!")
  }

});
btnAdicionarNovoDepois.addEventListener("click",(evt)=>{
  const rs = cursoSelecionado();
  
 
  if(rs!=undefined){
    if(nomeCurso.value != ""){
  
      const novoCurso=criarNovoCurso(nomeCurso.value);
      caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
     
    }
    
    else{
      alert("Adicionar nome do curso!")
      
    }
  }
  else{
    alert("Selecione um curso!")
  }

})