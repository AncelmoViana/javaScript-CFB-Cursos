const caixa = document.getElementById("caixa");

const elementos = [ '1', '2' ,'3' ,'4' ,'5' ,'6', '7', '8', '9', '10', '11' ,'12' ,'13', '14', '15', '16', '30', '50' ,'100' ,'200', '8585' ,'47474', '3939393' ,'4747474', '5858585', '5858585', '585858', '58585', '585858' ];

elementos.map((el, chave)=>{
    const novo = document.createElement("div");
    caixa.appendChild(novo);
    novo.innerHTML = el;
    novo.setAttribute("class", "c");
    novo.setAttribute("id", "c"+chave);
    novo.addEventListener("click", (evt)=>{
        caixa.removeChild(evt.target)
    })
})



