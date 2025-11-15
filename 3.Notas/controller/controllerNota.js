// importação da classe que gerencia as notas na memória
const notas = require('../model/notaMemoria.js');

// cria e já exporta a função que será responsável pela criação de nota
exports.cria_get = async function (req, res) {
    contexto = {
        titulo_pagina: "Criação de Nota",
    }

    // renderiza o arquivo dentro da pasta view
    res.render('criaNota', contexto);
}

// adicionado opcional
// A função POST é responsável por receber os dados do formulário
exports.cria_post = async function (req, res) {
    // 1. Captura os dados enviados via formulário (POST) no corpo da requisição (req.body)
    const chave = req.body.chave;
    const titulo = req.body.titulo;
    const texto = req.body.texto;

    // try {
    // 2. Chama o método 'cria' do modelo para salvar a nova nota
    await notas.cria(chave, titulo, texto);

    // 3. Após o sucesso, redireciona o usuário para a tela principal (Padrão PRG)
    res.redirect('/');
    /*
    } catch (erro) {
        // 4. Em caso de erro (ex: chave já existe), renderiza a página novamente com uma mensagem
        // Você pode implementar uma lógica de tratamento de erro mais robusta aqui
        console.error("Erro ao criar nota:", erro);
        contexto = {
            titulo_pagina: "Criação de Nota",
            erro: `Erro ao criar nota: ${erro.message}`,
            // Opcional: manter os dados preenchidos no formulário
        }
        
        res.render('criaNota', contexto);
    }
    */
}

// fim adicionado opcional

exports.consulta = async function(req, res){
    // informação passada como parametro na url
    var chave = req.params.chave_nota;
    var nota = await notas.consulta(chave);

    contexto = {
        titulo_pagina: "Consulta a Nota",
        chave: nota.chave,
        titulo: nota.titulo,
        texto: nota.text,
    }

    // renderiza o arquivo dentro da pasta view
    res.render('consultaNota', contexto);
}