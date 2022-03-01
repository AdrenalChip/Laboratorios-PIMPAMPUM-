const express= require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));


const rutas_movies = require('./routes/movies.routes');
app.use('/movies', rutas_movies);

//Middleware
app.use((request,response,next)=>{
    console.log('Middleware!');
    next(); //avanzar al siguiente middleware
});

app.use((request,response,next)=>{
    console.log('Otro middleware');
    response.send('Hola mundo')
});

app.listen(3000);
