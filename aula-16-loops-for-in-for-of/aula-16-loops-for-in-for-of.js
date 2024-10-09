let num =[10,20,30,40,50];

for(let i=0; i<num.length; i++){
   console.log(num[i]);
}

for(n in num){
   console.log("for in " + num[n])
}

for(n of num){
   console.log("for of " + n);
}