
var ComentarioService = require('../services/comentario')

let comentario = {
    getAllComentarios: (req, res, id) => {
        res.json(ComentarioService.getComentarios());

    },
    getOneComentarioId: (req, res, id) => {
        res.json(ComentarioService.getOneComentario(req.params.id))

    },
    postComentarioId: (req, res, id) => {
        res.status(201).json(ComentarioService.postOneComentario(req.body));

    },
    deleteComentarioId: (req, res, id) => {
        res.status(204).json(ComentarioService.deleteComentario(req.params.id));

    },
    putComentarioId: (req, res, id) => {
        res.status(201).json(ComentarioService.putComentario(req.params.id, req.body));

    }
}

module.exports = comentario;