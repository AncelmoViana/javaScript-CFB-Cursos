 const p_array = document.querySelector("#array");


 const btnReduzir = document.querySelector("#btnReduzir");

 const resultado = document.getElementById("resultado")

 const elementos_array = [2,4,6,8,10];
 let antes=[];
 let atua=[];

 p_array.innerHTML = "["+elementos_array+"]";


btnReduzir.addEventListener("click",(evt)=>{
  resultado.innerHTML = elementos_array.reduce((anterior,atual,posterior)=>{
    antes.push(anterior);
    atua.push(atual);
    return atual+anterior
  })
  resultado.innerHTML+="<br/>Valor Atual: "+antes+"</br>Valor Anterior: "+atua;

})
