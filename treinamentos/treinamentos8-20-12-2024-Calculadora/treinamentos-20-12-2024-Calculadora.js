const display = document.getElementById("display");

function teclas_calculadora(input){
   
        display.value += input;
    
    
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