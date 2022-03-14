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
    response.render('nuevo', {
        username:request.session.username ? request.session.username:'',
        info:''
    }); 
};
exports.post_nuevo = (request, response, next) => {
    console.log('POST /capybaras/nuevo');
    console.log(request.body);
    const capybara = 
    new Capybara(request.body.nombre,request.body.descripcion,request.body.imagen);
    capybara.save()
        .then(()=>{
            request.session.info=capybara.nombre+'fue registrado con éxito';
            response.setHeader('Set-Cookie',
            'ultimo_capybara='+capybara.nombre+'; HttpOnly');
            response.redirect('/capybaras');
        })
        .catch(err=>console.log(err));
};
////SEIRES
exports.get_nuevo2=(request, response, next) => {
    console.log('GET /capybaras/nuevo2');
    response.render('nuevo2', {username:request.session.username ? request.session.username:'',
    info:''}); 
};
exports.post_nuevo2=(request, response, next) => {
    console.log('POST /capybaras/nuevo2');
    console.log(request.body);
    const capybaras2=
    new Capybara2(request.body.nombre,request.body.descripcion,request.body.imagen);
    capybaras2.save()
        .then(()=>{
            request.session.info=capybaras2.nombre+'fue registrado con éxito';
            response.setHeader('Set-Cookie','ultimo_capybara='+capybaras2.nombre+'; HttpOnly');
            response.redirect('/capybaras');
        })
        .catch(err=>console.log(err));
};
//////ANIME
exports.get_nuevo3=(request, response, next) => {
    console.log('GET /capybaras/nuevo3');
    response.render('nuevo3', {username:request.session.username ? request.session.username:'',
    info:''}); 
};
exports.post_nuevo3=(request, response, next) => {
    console.log('POST /capybaras/nuev3');
    console.log(request.body);
    const capybaras3= 
    new Capybara3(request.body.nombre,request.body.descripcion,request.body.imagen);
    capybaras3.save()
    .then(()=>{
        request.session.info=capybaras3.nombre+'fue registrado con éxito';
        response.setHeader('Set-Cookie',
        'ultimo_capybara='+capybaras3.nombre+'; HttpOnly');
        response.redirect('/capybaras');
    })
    .catch(err=>console.log(err));
};
///////
exports.listar = (request, response, next) => {
    console.log('Ruta /capybaras');
    console.log(request.cookies);
    const info= request.session.info ? request.session.info :'';
    request.session.info='';

    Capybara.fetchAll()
        .then(([rows,fieldData])=>{
            console.log(rows);
            //////     
            Capybara2.fetchAll()
                .then(([rows2,fieldData])=>{
                            console.log(rows2);
                            ////
                            Capybara3.fetchAll()
                                .then(([rows3,fieldData])=>{
                                        console.log(rows3);
                                    var animes=rows3;
                                    response.render('lista', 
                                {capybaras: peliculas,capybaras2:series, capybaras3:animes,
                                username:request.session.username ? request.session.username:'',
                                ultimo_capybara:request.cookies.ultimo_capybara ? request.cookies.ultimo_capybara:'',
                                info:info
                                });
                                })
                                .catch(err=>{console.log(err);
                                }); 
                            ////
                        var series=rows2;
                })
                .catch(err=>{console.log(err);
                }); 
            /////
            
            //// 
            var peliculas=rows;  
    })
    .catch(err=>{console.log(err);
    }); 
    
}
