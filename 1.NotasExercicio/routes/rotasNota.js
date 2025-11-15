var express = require('express');
var router = express.Router();
var controllerNota = require('../controller/controllerNota.js');

/* Get Cria Nota. */
router.get('/cria', controllerNota.cria_get);

// Linha adicionada para solucionar o erro
router.post('/cria', controllerNota.cria_post);
// fim da linha opcional

// GET consulta Nota 
router.get('/consulta/:chave_nota', controllerNota.consulta);

// GET altera Nota
router.get('/altera/:chave_nota', controllerNota.altera_get);

// POST altera Nota
router.post('/altera/:chave_nota', controllerNota.altera_post);

// GET Exclui Nota
router.get('/deleta/:chave_nota', controllerNota.deleta);

module.exports = router;