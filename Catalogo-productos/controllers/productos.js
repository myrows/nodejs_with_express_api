
const ProductoService = require('../services/productos');

let productos = {
    getAllProductos: (req, res) => {
        res.json(ProductoService.getAllProducts());
    },
    getOneProduct: (req, res, id) => {
        res.json(ProductoService.getOneProductId(req.params.id));
    }
}

module.exports = productos;

