// Neste arquivo serão definios todos os modelos de dados da aplicação
class Nota {
    constructor(chave, titulo, texto) {
        this.chave = chave;
        this.titulo = titulo;
        this.texto = texto;
    }
    get chave() {
        return this.chave;
    }
    get titulo(){
        return this.titulo;
    }
    get texto(){
        return this.texto;
    }
    set titulo(novoTitulo){
        this.titulo = novoTitulo;
    }
    set texto(novoTexto){
        this.texto = novoTexto;
    }
}

module.exports = Nota