
const categoria = [
    {
        id: 1,
        nombre: "Frutas",
        categoria_padre: null
    },
    {
        id: 2,
        nombre: "Electrónico",
        categoria_padre: null
    },
    {
        id: 3,
        nombre: "Muebles",
        categoria_padre: null
    }
]


let service = {
    getCategorias: () => {
        return categoria;
    },
    getOneCategoria: (id) => {
        const found = categoria.find(element => element.id == id);

        return found;
    },
    postOneCategoria: (body) => {
        categoria.push(body);
    },
    deleteCategoria: (id) => {

        const foundIndex = categoria.findIndex(element => element.id == id);

        categoria.splice(foundIndex, 1);
    },
    putCategoria: (id, body) => {
        const foundIndex = categoria.findIndex(element => element.id == id);

        categoria.splice(foundIndex, 1, body);
    }
}

module.exports = service;