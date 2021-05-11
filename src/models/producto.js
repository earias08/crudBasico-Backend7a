import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique: true,
        maxlength: 150
    },
    precioProducto:{
        type: Number,
        required:true
    },
    categoria:{
        type: String,
        required:true
    }
});

const Producto = mongoose.model('producto', productoSchema )

export default Producto;
