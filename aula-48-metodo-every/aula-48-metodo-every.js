 const p_array = document.querySelector("#array");


 const btnVerificar = document.querySelector("#btnVerificar");

 const resultado = document.getElementById("resultado")

 const elementos_array = [40,5,8,2,9,15,20,35];

 p_array.innerHTML = "["+elementos_array+"]";

btnVerificar.addEventListener("click",(evt)=>{
  
  const ret=elementos_array.every((e,i)=>{
    if(e<18){
      resultado.innerHTML = "Array não conforme na posição "+i;
      resultado.style.color = "#8B0000"
    }
    return e>=18
  })
  if(ret){
    resultado.innerHTML = "Conforme!";
    resultado.style.color = "#006400"
  }
})