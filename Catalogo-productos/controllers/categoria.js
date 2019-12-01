
var CategoriaService = require('../services/categoria')

let categoria = {
    getAllCategoria: (req, res, id) => {
        res.json(CategoriaService.getCategorias());

    },
    getOneCategoriaId: (req, res, id) => {
        res.json(CategoriaService.getOneCategoria(req.params.id))

    },
    postCategoria: (req, res, id) => {
        res.status(201).json(CategoriaService.postOneCategoria(req.body));

    },
    deleteCategoriaId: (req, res, id) => {
        res.status(204).json(CategoriaService.deleteCategoria(req.params.id));

    },
    putCategoriaId: (req, res, id) => {
        res.status(201).json(CategoriaService.putCategoria(req.params.id, req.body));

    }
}

module.exports = categoria