var express = require('express');
var router = express.Router();

const ProductoController = require('../controllers/productos')
const customMdw = require('../middleware/custom')

/* PRODUCTOS ROUTER */

router.get('/products', ProductoController.getAllProductos);
router.get('/products/:id',customMdw.userAuthenticated, ProductoController.getOneProduct);


module.exports = router;