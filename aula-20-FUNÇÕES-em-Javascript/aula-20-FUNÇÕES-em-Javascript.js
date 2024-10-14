/*
Break:
quando a execuçao encontra um break no codigo ele para o loop encerrando-o e continua a execuçao do programa

Continue:
quando é executado dentro de um loop ele para a iteração e pula para a proxima iteração.
*/

let n = 0;
let max = 1000;

console.log("Exemplo de um break");

let pares = 0;

while(n<max){
   console.log("CBF Cursos - " + n);
   if(n > 10){
      break;
   }
   n++;
}
console.log("Fim do Programa");



console.log("Exemplo de um Continue");
for(let i=0; i<max; i++){
 
   if(i%2!=0){
      continue;
   }
   pares++;

}
console.log("Quantidade de pares: " + pares)
console.log("Fim do Programa")

