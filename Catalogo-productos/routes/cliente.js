
var express = require('express');
var router = express.Router();

const ClienteController = require('../controllers/cliente')
const customMdw = require('../middleware/custom')

router.get('/clientes', ClienteController.getAllClientes);
router.get('/clientes/:id', ClienteController.getOneClienteId);
router.post('/clientes', ClienteController.postClienteId);
router.delete('/clientes/:id', customMdw.userAuthenticated, ClienteController.deleteClienteId);
router.put('/clientes/:id', customMdw.userAuthenticated, ClienteController.putClienteId);

module.exports = router;