

var express = require('express');
var router = express.Router();

const ComentarioController = require('../controllers/comentario');
const customMdw = require('../middleware/custom')

router.get('/comentarios', ComentarioController.getAllComentarios);
router.get('/comentarios/:id', ComentarioController.getOneComentarioId);
router.post('/comentarios', ComentarioController.postComentarioId);
router.delete('/comentarios/:id', customMdw.userAuthenticated, ComentarioController.deleteComentarioId);
router.put('/comentarios/:id', customMdw.userAuthenticated, ComentarioController.putComentarioId);

module.exports = router;