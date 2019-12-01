
const cliente = [
    {
        id: 1,
        nombre_completo: "Pedro San Sebastían Steve",
        password: "12345"
    },
    {
        id: 2,
        nombre_completo: "Nieves Rodriguez Pala",
        password: "12345"
    }
    
]


let service = {
    getClientes: () => {
        return cliente;
    },
    getOneCliente: (id) => {
        const found = cliente.find(element => element.id == id);

        return found;
    },
    postOneCliente: (body) => {
        cliente.push(body);
    },
    deleteCliente: (id) => {

        const foundIndex = cliente.findIndex(element => element.id == id);

        comentario.splice(foundIndex, 1);
    },
    putCliente: (id, body) => {
        const foundIndex = cliente.findIndex(element => element.id == id);

        comentario.splice(foundIndex, 1, body);
    }
}

module.exports = service;