let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");

let resultado = document.getElementById("resultado");

const calcular = [...document.querySelectorAll(".calcular")];
let res;

calcular.map((e,i)=>{
    e.addEventListener("click",()=>{
        const calculo = e.firstChild.textContent;
        
        switch(calculo){
            case "+":
                res=Number(numero1.value)+Number(numero2.value);
                resultado.value = res;
                break;
            case "-":
                res=Number(numero1.value)-Number(numero2.value);
                resultado.value = res;
                break;
            case "x":
                res=Number(numero1.value)*Number(numero2.value);
                resultado.value = res;
                break;
            case "/":
                res=Number(numero1.value)/Number(numero2.value);
                resultado.value = res;
                break;
            case "c":
                numero1.value = "";
                numero2.value = "";
                resultado.value = "";
            break
             
                
        }
    })
})

