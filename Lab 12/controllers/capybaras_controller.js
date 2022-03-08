const path = require('path');
const Capybara = require('../models/capybara');
const Capybara3 = require('../models/capybara3');
const Capybara2 = require('../models/capybara2');

exports.cerveza = (request, response, next) => {
    response.sendFile(path.join(__dirname, '..', 'views', 'cerveza_view.html'));
};
//MOVIES
exports.get_nuevo = (request, response, next) => {
    console.log('GET /capybaras/nuevo');
    response.render('nuevo', {nombre: 'Lalo'}); 
};
exports.post_nuevo = (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    const capybara = new Capybara(request.body.nombre);
    capybara.save();
    response.redirect('/capybaras');
};
////SEIRES
exports.get_nuevo2=(request, response, next) => {
    console.log('GET /capybaras/nuevo2');
    response.render('nuevo2', {nombre: 'Lalo'}); 
};
exports.post_nuevo2=(request, response, next) => {
    console.log('POST /capybaras/nuevo2');
    console.log(request.body);
    const capybaras2=new Capybara2(request.body.nombre);
    capybaras2.save();
    response.redirect('/capybaras');
};
//////ANIME
exports.get_nuevo3=(request, response, next) => {
    console.log('GET /capybaras/nuevo3');
    response.render('nuevo3', {nombre: 'Lalo'}); 
};
exports.post_nuevo3=(request, response, next) => {
    console.log('POST /capybaras/nuev3');
    console.log(request.body);
    const capybaras3= new Capybara3(request.body.nombre);
    capybaras3.save();
    response.redirect('/capybaras');
};
///////
exports.listar = (request, response, next) => {
    console.log('Ruta /capybaras');
    response.render('lista', {capybaras: Capybara.fetchAll(), capybaras2: Capybara2.fetchAll(), capybaras3:Capybara3.fetchAll()}); 
}