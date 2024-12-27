const display = document.getElementById("display");

function teclas_calculadora(input){
    
    if(display.value == "0"){
        display.value=input;
   }
   else{
    display.value += input;
   }
        
   
    
    
}
function apagarDisplay(){
    display.value = "";

}
function calcular(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Erro";
    }
   

}