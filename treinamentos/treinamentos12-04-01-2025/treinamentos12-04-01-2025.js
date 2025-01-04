const display = document.getElementById("display");
const botoes = [...document.querySelectorAll(".buttons")];

botoes.forEach((evt)=>{
    const btn = evt.firstChild.textContent;
    
    evt.addEventListener("click",()=>{
        display.value += btn;
    })
})


