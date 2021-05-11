import Producto from '../models/producto';

const cafeteriaCtrl = {};

cafeteriaCtrl.getPrueba = (req, res)=>{
    res.send('Hola esta es una prueba del backend');
}

cafeteriaCtrl.nuevoProducto = async(req, res) =>{
    // console.log(req.body);
    // res.send('prueba de POST');
    try{
        // validar
        // crear un objeto para guaradar en la BD
        const productoCreado = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        })

        // guardar en la BD
        await productoCreado.save();
        // enviar respuesta al frontend
        res.status(201).json({
            mensaje: "Producto agregado correctamente"
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Error al agregar el producto"
        });
    }
}

export default cafeteriaCtrl;