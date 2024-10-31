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
   const btn_lixeira = document.createElement("img")
   btn_lixeira.setAttribute("src", "./iconeLixeira.png")
   btn_lixeira.setAttribute("class", "btn_lixeira")
   novoElemento.appendChild(btn_lixeira)
    btn_lixeira.addEventListener("click", (evt)=>{
     
      caixa1.removeChild(evt.target.parentNode)
    })


   
   
 })