
const words = ['spray', 'exuberante', 'destruição', 'present', 'elite' ];

const result = words.filter((word) => word.length > 6);

console.log(result);


const idades = [10, 15, 17, 20, 30, 40, 50, 60, 8];

const maior = idades.filter((val)=>{
  if(val>18){
    return val;
  }
})
const menor = idades.filter((val)=>val<18)

console.log("\n\nArray completo "+idades)
console.log("\n\nNúmeros maiores que 18 "+maior);
console.log("\n\nNumeros menores que 18 "+menor)

