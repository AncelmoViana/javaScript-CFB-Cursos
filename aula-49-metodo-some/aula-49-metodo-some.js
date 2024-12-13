 const p_array = document.querySelector("#array");


 const btnVerificar = document.querySelector("#btnVerificar");

 const resultado = document.getElementById("resultado")

 const elementos_array = [40,5,8,2,9,15,20,35];

 p_array.innerHTML = "["+elementos_array+"]";

btnVerificar.addEventListener("click",(evt)=>{
  resultado.innerHTML = "Array nao conforme";
  const ret=elementos_array.some((e,i)=>{
    return e >= 40;
  })
  if(ret){
    resultado.innerHTML = "OK"
  }
  console.log(ret);
})
