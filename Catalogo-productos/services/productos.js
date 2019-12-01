
var ComentarioService = require('../services/comentario')

const productos = [
    {
        id: 1,
        nombre: "Manzana",
        descripcion: "Es una buena manzana",
        precio_actual: 0.10,
        fecha_publicacion: new Date(),
        stock_actual: 5,
        categoria: 1,
        comentarios: 1

    },
    {
        id: 2,
        nombre: "Plátano",
        descripcion: "Tiene mucho potasio",
        precio_actual: 0.50,
        fecha_publicacion: new Date(),
        stock_actual: 11,
        categoria: 1,
        comentarios: 2

    },
    {
        id: 3,
        nombre: "Móvil",
        descripcion: "Una pantalla de 20 pulgadas",
        precio_actual: 250.50,
        fecha_publicacion: new Date(),
        stock_actual: 5,
        categoria: 2,
        comentarios: 1

    },
    {
        id: 4,
        nombre: "TV Plasma",
        descripcion: "Una increíble resolución en una pantalla tan fina",
        precio_actual: 735.50,
        fecha_publicacion: new Date(),
        stock_actual: 8,
        categoria: 2,
        comentarios: 3

    },
    {
        id: 5,
        nombre: "Ropero",
        descripcion: "Ideal espacio para guardar toda tu ropa sin preocupaciones",
        precio_actual: 150.95,
        fecha_publicacion: new Date(),
        stock_actual: 11,
        categoria: 3,
        comentarios: 4

    }
]

const service = {
    getAllProducts: () => {

        const arrayCargadoComentarios = ComentarioService.getComentarios();

        const arrayComentarios = [];

        for (let index = 0; index < productos.length; index++) {

            for (let indexC = 0; indexC < arrayCargadoComentarios.length; indexC++) {
                
                if(productos[index].comentarios == arrayCargadoComentarios[indexC].id){

                    arrayComentarios.push(arrayCargadoComentarios[indexC]);
                }  
                
            }
        }
        const getAllWithComents = [productos, arrayComentarios]

        return getAllWithComents;
    },
    getOneProductId: (id) => {

        const arrayCargadoComentarios = ComentarioService.getComentarios();

        const foundProd = productos.find(element => element.id == id);
        const foundComent = arrayCargadoComentarios.find(element => element.id == foundProd.comentarios);
        const producto = [foundProd,foundComent]

        return producto;
    }
};


module.exports = service;