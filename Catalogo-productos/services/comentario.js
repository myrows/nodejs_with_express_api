
const comentario = [
    {
        id: 1,
        autor: 1,
        cuerpo_comentario: "Esta muy buena esta fruta"
    },
    {
        id: 2,
        autor: 1,
        cuerpo_comentario: "Me ha parecido muy bueno"
    },
    {
        id: 3,
        autor: 2,
        cuerpo_comentario: "Ideal para toda mi ropa , me ha servido de mucho , una calidad excelente"
    },
    {
        id: 4,
        autor: 1,
        cuerpo_comentario: "Muy bueno"
    }

]

let service = {
     getComentarios: () => {
        return comentario;
    },
    getOneComentario: (id) => {
        const found = comentario.find(element => element.id == id);

        return found;
    },
    postOneComentario: (body) => {
        comentario.push(body);
    },
    deleteComentario: (id) => {

        const foundIndex = comentario.findIndex(element => element.id == id);

        comentario.splice(foundIndex, 1);
    },
    putComentario: (id, body) => {
        const foundIndex = comentario.findIndex(element => element.id == id);

        comentario.splice(foundIndex, 1, body);
    }
}

module.exports = service;