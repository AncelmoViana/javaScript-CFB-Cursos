function soma(a, b){
   console.log(a + b);
}
soma(10, 50);
soma(55, 50);
soma("Ancelmo", " Viana");

function multiplicar(a = 5, b = 2){
   return a * b;
}

console.log(multiplicar(3, 10));

let valor = 0;
console.log(valor);

function add(v){
   valor += v;
}
function limpar() { valor = 0; }
add(10);
console.log(valor);

add(5);
console.log(valor);

limpar();

console.log(valor)