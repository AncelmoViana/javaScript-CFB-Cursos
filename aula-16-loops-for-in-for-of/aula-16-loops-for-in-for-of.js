let num =[10,20,30,40,50];

for(let i=0; i<num.length; i++){
   console.log("for tradicional " + num[i]);
}

for(n in num){
   console.log("for in " + num[n])
}

for(n of num){
   console.log("for of " + n);
}

const objs = document.getElementsByTagName("div");

for(o of objs){
   console.log(o.innerHTML = "cursos");
}

for(o in objs){
   console.log(objs[0].innerHTML = "curso2 ")
}