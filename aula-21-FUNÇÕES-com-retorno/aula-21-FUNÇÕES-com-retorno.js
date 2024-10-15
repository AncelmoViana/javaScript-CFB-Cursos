function canal(){
   let n1 = 10;
   let n2 = 3;
   let res = n1 * n2;

   if(res%2==0){
      return res + " é Par";
   }
   else{
      return res + " é Impar"
   }
}

console.log(canal());
