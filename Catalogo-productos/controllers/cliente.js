
var ClienteService = require('../services/cliente')

let cliente = {
    getAllClientes: (req, res, id) => {
        res.json(ClienteService.getClientes());

    },
    getOneClienteId: (req, res, id) => {
        res.json(ClienteService.getOneCliente(req.params.id))

    },
    postClienteId: (req, res, id) => {
        res.status(201).json(ClienteService.postOneCliente(req.body));

    },
    deleteClienteId: (req, res, id) => {
        res.status(204).json(ClienteService.deleteCliente(req.params.id));

    },
    putClienteId: (req, res, id) => {
        res.status(201).json(ClienteService.putCliente(req.params.id, req.body));

    }
}

module.exports = cliente;