// importação da classe que gerencia as notas na memória
const notas = require('../model/notaMemoria.js');

// cria e já exporta a função que será responsável pela criação de nota
exports.cria_get = async function(req, res){
    contexto = {
        titulo_pagina: "Criação de Nota",
    }

    // renderiza o arquivo dentro da pasta view
    res.render('criaNota', contexto);
}

// adicionado opcional
// A função POST é responsável por receber os dados do formulário
exports.cria_post = async function(req, res){
    // 1. Captura os dados enviados via formulário (POST) no corpo da requisição (req.body)
    const chave = req.body.chave;
    const titulo = req.body.titulo;
    const texto = req.body.texto;

    try {
        // 2. Chama o método 'cria' do modelo para salvar a nova nota
        await notas.cria(chave, titulo, texto);

        // 3. Após o sucesso, redireciona o usuário para a tela principal (Padrão PRG)
        res.redirect('/');
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
}

// fim adicionado opcional