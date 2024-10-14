function nome(){
   console.log("CFB Cursos");
}

nome();

for(let i=0; i<10; i++){
   nome();
}

function soma(){
   let n1 = 15;
   let n2 = 10;
   let soma = n1 + n2;
   console.log(soma);
}

soma();

cont = 0;
let d1=document.getElementById("d1");
let d2=document.getElementById("d2");
let d3=document.getElementById("d3");
let botao = document.getElementById("botao");

function mudarTexto(){
   if(cont == 0){
      d1.innerHTML = "d1 alterado";
      d2.innerHTML = "d2 alterado";
      d3.innerHTML = "d3 alterado";
      botao.innerHTML = "Voltar Texto"

      cont = 1;

   }
   else{
      d1.innerHTML = "Ancelmo";
      d2.innerHTML = "CFB Cursos";
      d3.innerHTML = "Curso de Javascript";
       botao.innerHTML = "Mudar Texto"

      cont = 0;
   }
   
}
