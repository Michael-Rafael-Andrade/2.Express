var express = require('express');
var router = express.Router();
var controllerNota = require('../controller/controllerNota.js');

/* Get Cria Nota. */
router.get('./cria', controllerNota.cria_get);

module.exports = router;