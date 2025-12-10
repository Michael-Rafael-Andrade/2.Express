// importação da classe que gerência as notas na memória
const Nota = require('../model/modelos.js');

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    // lista todas as notas utilizando o método do Sequelize
    const notas = await Nota.findAll();

    const contexto = {
        titulo_pagina: "Gerenciador de Notas de Texto",
        notas: notas,
    }

    // renderiza o arquivo index.hbs, dentro da pasta view
    res.render('index', contexto);
}

// observação: A função "sobre" permanece sem alterações