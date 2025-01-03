const caixa=document.querySelector("#caixa")


let musicas = new Set(['musica1','rock', 'blues', 'country']);

musicas.add("musica very nice");
musicas.add('musica55')

console.log(musicas)

// musicas.forEach((el)=>{
//     caixa.innerHTML += el + "<br>"
// })

for(let m of musicas){
    caixa.innerHTML += m + "<br>"

}






