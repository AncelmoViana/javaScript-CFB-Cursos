const f=function(...valores){
   let res = 0;
   for(v of valores){
      res += v;
   }
   return res;
}

console.log(f(10,5, 6, 90 ));


const s=new Function("v1","v2", "return v1+v2") // função construtor anonima.

console.log(s(10,5,15));