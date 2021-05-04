import express from 'express';

// crear una instancia de express
const app = express();

// le pedimos a express que nos cree un port
app.set('port', 4001);

app.listen(app.get('port'), ()=>{
    console.log('Estoy en el puerto '+app.get('port'));
})