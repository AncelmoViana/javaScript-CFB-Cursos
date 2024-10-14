/*
Diferença de while para do while

ambos vão repetir um ou mais blocos de códigos se a condião for verdadeira.

while:
primeiro vai verificar se a condição é verdadeira, se sim ele executa o codigo, e depois verifica de novo .

se a condiçao for falsa o codigo não sera executado nenhuma vez.

Do while:
Primero ele executa o código depois ele verifica se a condição é verdadeira e se for ele executa o codigo novamente e vai repetindo tudo ate que a condição não seja mais verdadeira.

se a condiçao for falsa o codigo sera executado ao menos uma fez.
*/

let n = 10;

console.log("execuçao do codigo While");

while(n<10){
   console.log(n + " CBF Cursos");
   n++;
}
console.log("Fim de Programa");

console.log("execuçao do codigo Do While");
do{
   console.log(n + " CBF Cursos");
   n++;
}
while(n<10);
console.log("Fim de Programa");




