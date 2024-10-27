const cursos = [...document.querySelectorAll(".curso")];
const caixa1 = document.getElementById("caixa1");
const caixa2 = document.getElementById("caixa2");
const botao_transferir = document.getElementById("transferir");

cursos.map((e)=>{
    e.addEventListener("click", ()=>{
        e.classList.toggle("selecionado")
    })
   
    botao_transferir.addEventListener("click", ()=>{
       
        if(e.classList.contains("selecionado") ){
            caixa2.appendChild(e);
            
            
        }
        else{
            caixa1.appendChild(e);
            
        }
      
    })
})