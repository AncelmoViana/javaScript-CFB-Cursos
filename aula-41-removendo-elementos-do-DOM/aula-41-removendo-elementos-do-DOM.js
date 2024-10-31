 const caixa1 = document.querySelector("#caixa1");
 const btn_c = document.querySelectorAll(".cursos");
 const cursos = ["HTML", "CSS", "Javascript", "PHP", "React", "MySQL", "ReactNative"];
 
 

 cursos.map((el, chave) =>{
    
    console.log(chave)
    const novoElemento = document.createElement("div");

    caixa1.appendChild(novoElemento);
    novoElemento.innerHTML = el;

    novoElemento.setAttribute("id", "c"+chave);
    novoElemento.setAttribute("class", "curso c1 ");

   
   
 })