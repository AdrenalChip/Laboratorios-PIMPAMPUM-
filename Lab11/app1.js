const express= require('express');
const app = express();

//Middleware
app.use((request,response,next)=>{
    console.log('Middleware!');
    next(); //avanzar al siguiente middleware
});

app.use('/capybaras',(request,response,next)=>{
    console.log('Ruta/capybaras');
    response.send('Hola mundo')
});

app.listen(3000);
