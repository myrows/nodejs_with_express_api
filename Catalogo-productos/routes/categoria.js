
var express = require('express');
var router = express.Router();

const CategoriaController = require('../controllers/categoria')
const customMdw = require('../middleware/custom')

/* CATEGORIAS ROUTER */

router.get('/categorias', CategoriaController.getAllCategoria);
router.get('/categorias/:id', CategoriaController.getOneCategoriaId);
router.post('/categorias', CategoriaController.postCategoria);
router.delete('/categorias/:id', customMdw.userAuthenticated, CategoriaController.deleteCategoriaId);
router.put('/categorias/:id', customMdw.userAuthenticated, CategoriaController.putCategoriaId);

module.exports = router;