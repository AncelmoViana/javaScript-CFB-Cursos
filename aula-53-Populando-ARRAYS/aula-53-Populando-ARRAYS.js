let valor1 = document.getElementById("valor1").value;
let valor2 = document.getElementById("valor2").value;

let resultado = document.getElementById("resultado");

let somar = document.getElementById("+");
let multiplicar = document.getElementById("x");
let diminuir = document.getElementById("-");
let dividir = document.getElementById("/");



let valores=[valor1,valor2];
const op=[
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        resultado.value=Number(val[0])+Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        resultado.value=Number(val[0])-Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        resultado.value=Number(val[0])*Number(val[1])
    },
    ()=>{
        const val=[document.getElementById("valor1").value,document.getElementById("valor2").value]
        resultado.value=Number(val[0])/Number(val[1])
    }
   
   
   
];

console.log(op[0](valores))
somar.addEventListener("click",()=>{
    console.log(op[0](valores))
})
diminuir.addEventListener("click",()=>{
    console.log(op[1](valores))
})
multiplicar.addEventListener("click",()=>{
    console.log(op[2](valores))
})
dividir.addEventListener("click",()=>{
    console.log(op[3](valores))
})