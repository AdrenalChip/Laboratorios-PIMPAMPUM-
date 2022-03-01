const express = require('express');
const router = express.Router();

const movies=["Last Night in Soho", "Peter Pan", "Dumbo"];

router.get('/nuevo', (request, response, next) => {
        console.log('GET /movies/nuevo');
        let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><title>Movies</title><meta charset="utf-8"></head><body><h1 id="principal">Este sitio es de Movies</h1><h2>Aquí se hace las peliculas:</h2><form action="/movies/nuevo" method="POST"><label for="nombre">Titulo: </label><input type="text" id="nombre" name="nombre" placeholder="Yesterday"><br><br><input type="submit" value="Enviar"></form><br><br><a href="/movies">Regresar a la lista de peliculas</a></body></html>';
        response.send(respuesta); 
});

router.post('/nuevo', (request, response, next) => {

        console.log('POST /movies/nuevo');
        console.log(request.body);
        movies.push(request.body.nombre);
        response.redirect('/movies');
});

router.use('/', (request, response, next) => {
        console.log('Ruta /movies');
    
        let respuesta = '<!DOCTYPE html><html lang="es-mx"><head><meta charset="utf-8"><title>Movies</title></head><body><h1 id="principal">Este sitio es de peliculas chidos</h1><p>Tenemos las siguientes peliculas:</p><ul>';
    
        for (let i in movies) {
    
            respuesta += '<li>' + movies[i] + '</li>';
    
        }
    
        respuesta += '</ul><br><br><a href="/movies/nuevo">Agregar una nueva pelicula</a></body></html>';
    
        response.send(respuesta); 
});
    module.exports = router;