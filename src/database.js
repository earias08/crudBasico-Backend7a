import mongoose from 'mongoose';

const url= 'mongodb://localhost:27017/cafeteria7a';

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true});

const connection = mongoose.connection;

// una vez establecida la conexion mostrar en la terminal
connection.once('open',()=>{
    console.log('BD conectada');
});