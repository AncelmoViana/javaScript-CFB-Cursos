function aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;

    this.dados_arrow = function(){
        setTimeout(() => {
         
            console.log(this.nome);
            console.log(this.nota);
        }, 4000)
    }
}
const al1 = new aluno("Ancelmo", 200);
al1.dados_arrow();

