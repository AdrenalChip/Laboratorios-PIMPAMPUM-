const express = require('express');
const path = require('path');

const router = express.Router();

const capybaras = [
    {nombre: "Forrest Gump"}, 
    {nombre: "Naranja dulce"}, 
    {nombre: "Pocoyo"}, 
    {nombre: "Patricio"}
];

const capybaras2=[
        {nombre: "A ver"}
]

const capybaras3=[
    {nombre: "Full metal alchemist"},
    {nombre: "Gundam"}
]

router.get('/cerveza', (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'cerveza_view.html'));
});
///MOVIES
router.get('/nuevo', (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    response.render('nuevo', {nombre: 'Lalo'}); 
});

router.post('/nuevo', (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    capybaras.push({nombre: request.body.nombre});
    response.redirect('/capybaras');
});
//SEIRES
router.get('/nuevo2', (request, response, next) => {
        console.log('GET /capybaras/nuevo2');
        response.render('nuevo2', {nombre: 'Lalo'}); 
});
    
router.post('/nuevo2', (request, response, next) => {
        console.log('POST /capybaras/nuevo2');
        console.log(request.body);
        capybaras2.push({nombre: request.body.nombre});
        response.redirect('/capybaras');
});
//ANIME
router.get('/nuevo3', (request, response, next) => {
    console.log('GET /capybaras/nuevo3');
    response.render('nuevo3', {nombre: 'Lalo'}); 
});

router.post('/nuevo3', (request, response, next) => {
    console.log('POST /capybaras/nuev3');
    console.log(request.body);
    capybaras3.push({nombre: request.body.nombre});
    response.redirect('/capybaras');
});


///HIHI
router.use('/', (request, response, next) => {
    console.log('Ruta /capybaras');
    response.render('lista', {capybaras: capybaras, capybaras2: capybaras2, capybaras3: capybaras3}); 
});

module.exports = router;