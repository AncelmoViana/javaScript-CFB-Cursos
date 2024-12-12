 const p_array = document.querySelector("#array");

 const txt_pesquisar = document.querySelector("#txt_pesquisar");

 const btnPesquisar = document.querySelector("#btnPesquisar");

 const resultado = document.querySelector("#resultado");

 const elementos_array = [10,5,8,2,9,15,20,35,68,95,255];

 p_array.innerHTML = "["+elementos_array+"]";

 btnPesquisar.addEventListener("click",(evt)=>{
    resultado.innerHTML="Valor não encontrado"
  const ret = elementos_array.find((e,i)=>{
  
    if(txt_pesquisar.value==e){
      resultado.innerHTML = "Valor encontrado "+e+" na posição "+i;
    }
   
    
   
  })
  console.log(ret);

 })