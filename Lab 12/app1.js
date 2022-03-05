const express= require('express');
const bodyParser = require('body-parser');
const rutas_movies = require('./routes/movies.routes');

const app= express();

app.set('view engine','ejs');
app.set('views','views');

app.use(express.static(path.join(_dirname,'public')));

app.use(bodyParser.urlencoded({extended: false}));

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
