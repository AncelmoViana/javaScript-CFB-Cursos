// const cursos =["HTML", "CSS", "Javascript", "PHP", "React"];

// cursos.map((el, i)=>{
//     console.log("Curso: " + el + " - posiçao do curso: " + i)
// } );


// let el = document.getElementsByTagName("div");
// el = [...el]

// el.map((e, i) => {
//     console.log(e.innerHtml);
// })
// console.log(el);

// const el = document.getElementsByClassName("div");

// const val = Array.prototype.map.call(el, ({innerHTML}) => innerHTML);

//console.log(val)

const converterInt = (e) => parseInt(e);
let num = ['1', '2', '3' , '4', '5'].map(converterInt);

console.log(num);



const pessoas = [
    {id: 3, nome: 'Ancelmo'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
];

const novasPessoas = {};
for(const {id, nome} of pessoas){
    console.log(id, nome)
}


