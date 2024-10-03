/*

Operadores lógicos
 && and e
 || or 0u
 ! mot não
*/
let n1, n2, n3, n4;
n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log((n1 > n2) && (n1 > n3));

console.log((n1 > n2) || (n1 > n3));

console.log(!((n1 > n2) || (n1 > n3)));



if(n1 > n2){
    console.log(n1 + " é maior que " + n2)
}
else{
    console.log(n1 + " è menor que " + n2);
}

if(n1>n2 && n3<n4){
    console.log("Verdadeiro");
}
else{
    console.log("Falso");
}