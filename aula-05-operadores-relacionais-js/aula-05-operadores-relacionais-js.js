/*
+   soma
-   subtração       
/   divisão
*   pontenciação
%   resto da divisão
++  incremento
-- decremento
+= mais igual
-=  menos igual 

*/

let num1 =0, num2=0, res=0;
num1 = 10;
num2 = 15;
console.log("soma");

res = num1 + num2;

console.log(num1 + " + " + num2 + " é = "+ res);

console.log("subtração")
res = num2 - num1;

console.log(num2 + " - " + num1 + " = " + res);


num1 = 2;
num2 = 15;
console.log("Resto da divisão")
res = num2 % num1;

console.log("O resto da divisao de "+ num2 + " com "+ num1 +  " é = " + res);

console.log("incremento");

num1 = 10;
num1++;

console.log("o valor de num1 é " + (num1 - 1) +" se adicionarmos o operador ++ num++ seu valor será o valor de num1 + 1 neste caso = "+ num1 );

num1 = 10;
num1 --;

console.log("Decremento");
console.log("o valor de num1 é " + (num1 + 1) +" se adicionarmos o operador -- num-- seu valor será o valor de num1 - 1 neste caso = "+ num1 );

num1 = 10;

console.log("+=  fará o mesmo que o operador ++ porém neste caso estamos determinando o valor que será incrementado ex ");
console.log("o valor de num1 é "+ num1 + " se colocarmos num1 += 5 por exemplo seu valor sera 10 + 5, ex num1+=5 " + (num1 += 5))


console.log("isso serve para + - / * % entre outros, qualquer operador que eu adicionar antes do igual sera a variavel + ou - ou * etc o valor adicionado depois ex, num1 = 10  num1*= 5 seu valor sera 10 multiplicado por 5 ou seja 50.")




