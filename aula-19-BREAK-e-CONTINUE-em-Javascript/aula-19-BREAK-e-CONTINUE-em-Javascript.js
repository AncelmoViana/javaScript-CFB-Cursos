/*
Break:
quando a execuçao encontra um break no codigo ele para o loop encerrando-o e continua a execuçao do programa

Continue:
quando é executado dentro de um loop ele para a iteração e pula para a proxima iteração.
*/

let n = 0;
let max = 1000;

console.log("Exemplo de um break");

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
   console.log("CBF Cursos - " + i);
}
console.log("Fim do Programa")

