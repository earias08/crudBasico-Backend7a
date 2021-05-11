import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import './database';
import productoRoutes from './routes/producto.routes'

// configuraciones
// crear una instancia de express
const app = express();

// le pedimos a express que nos cree un port
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'));
});

// herramientas extras - middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'../public')));

// creo una ruta
app.use('/api/cafeteria', productoRoutes);