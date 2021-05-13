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

cafeteriaCtrl.listarProducto = async (req, res)=>{
    try{
        // crear un arreglo con todos los productos
        const arregloProductos = await Producto.find();
        // responder al frontend
        res.status(200).json(arregloProductos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo obtener los productos'
        })
    }
}

cafeteriaCtrl.eliminarProducto = async(req, res) =>{
    try{
        console.log(req.params.id);
        // eliminar un producto usando su id
        await Producto.findByIdAndDelete(req.params.id);
        res.status(200).json({mensaje: 'se pudo eliminar el producto correctamente'})
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo eliminar el producto'
        })
    }
}

cafeteriaCtrl.editarProducto = async(req, res) =>{
    try{
        await Producto.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json({
            mensaje: 'El producto fue modicado'
        });
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo encontrar el producto'
        });
    }
}

cafeteriaCtrl.obtenerProducto = async(req, res) =>{
    try{
        const productoBuscado = await Producto.findById(req.params.id);
        res.status(200).json(productoBuscado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'No se pudo encontrar el objeto buscado'
        })
    }
}


export default cafeteriaCtrl;