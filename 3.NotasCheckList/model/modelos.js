// Neste arquivo serão definios todos os modelos de dados da aplicação
class Nota {
    constructor(_chave, _titulo, _texto) {
        this.chave = _chave;
        this.titulo = _titulo;
        this.texto = _texto;
    }
    get chave() {
        return this._chave;
    }
    get titulo(){
        return this._titulo;
    }
    get texto(){
        return this._texto;
    }
    set chave(novaChave){
        this._chave = novaChave;
    }
    set titulo(novoTitulo){
        this._titulo = novoTitulo;
    }
    set texto(novoTexto){
        this._texto = novoTexto;
    }
}

module.exports = Nota