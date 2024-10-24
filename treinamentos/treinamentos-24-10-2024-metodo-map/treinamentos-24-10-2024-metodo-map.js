let elementos = [...document.querySelectorAll("div")];
let num = 0;
console.log("método map");
elementos.map((e) =>{
    num += 1;
    
    e.innerHTML = 'elemento alterado ' + num;
   
})

num = 0;
for(el of elementos){
    num++;
    if(num == 9){
        console.log(el.innerHTML);
    }
}



