const express = require('express');
const path= require ('path');

const router = express.Router();

const movies=[{nombre: "Last Night in Soho"}, { nombre: "Peter Pan"}, {nombre: "Dumbo"}];

router.get('/movies',(request,response,next)=>{
        response.sendFile(path.join(__dirname,'..','views','movies_view.html'))
});


router.get('/nuevo', (request, response, next) => {
        console.log('GET /movies/nuevo');
        response.render('nuevo',{nombre: 'ForrestGump'}); 
});

router.post('/nuevo', (request, response, next) => {
        console.log('POST /movies/nuevo');
        console.log(request.body);
        movies.push({nombre: request.body.nombre});
        response.redirect('/movies');
});

router.use('/', (request, response, next) => {
        console.log('Ruta /movies');
        response.render ('lista',{movies: movies});
     
});
module.exports = router;