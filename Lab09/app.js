const movies=["Last Night in Soho", "Peter Pan", "Dumbo"];
const series=["Vox Machina","Vikings","Trollhunters"];
const animes=["Tate no yuusha","Inuyasha","Ousama Ranking"];

const http=require('http');

const server= http.createServer((request, response) => {
    
    if(request.url==='/'){
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
    response.write('<!DOCTYPE html><html>');
    response.write('<head><title>Lab 10: Rutas y formas </title>');
    response.write('<meta charset="utf-8">');
    response.write('</head> <body>');
    response.write('<h1 id="principal">Este sitio es de Peliculas</h1>');
    response.write('<p>Tenemos los siguientes peliculas:</p>');
    response.write('<ul>');
    for (let i in movies) {
        response.write('<li>' + movies[i] + '</li>');
    }
    response.write('</ul>');
    response.write('<br><br>');
    response.write('<a href="nuevo">Agregar una nueva Pelicula</a>');
    response.write('<h1> Este sitios es de Series </h1>');
    response.write('<p>Tenemos las siguientes series:</p>');
    response.write('<ul>');
    for (let i in series) {
        response.write('<li>' + series[i] + '</li>');
    }
    response.write('<br><br>');
    response.write('<a href="nuevo2">Agregar una nueva Serie </a>');
    response.write('<h1> Este sitios es de Anime </h1>');
    response.write('<p>Tenemos las siguientes anime:</p>');
    response.write('<ul>');
    for (let i in animes) {
        response.write('<li>' + animes[i] + '</li>');
    }
    response.write('<br><br>');
    response.write('<a href="nuevo3">Agregar una nueva Anime </a>');
    response.write('<br><br>');
    response.write('<a href="nuevo4">Error 404 </a>');
    response.write('</body>');
    response.end();
//PELICULA
    } else if(request.url==='/nuevo' && request.method==='GET'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Lab 10:Rutas y formas</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de Peliculas</h1>');
        response.write('<h2>Aquí nacen las peliculas:</h2>');
        response.write('<form action="nuevo" method="POST">');
        response.write('<label for="nombre">Titulo: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Forrest Gump">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de todo</a>');
        response.write('</body>');
        response.end();


    } else if (request.url === '/nuevo' && request.method === 'POST') {  
        console.log("POST");
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            movies.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Lab 10:Rutas y formas</title>');
            response.write('</head><body>');
            response.write('<h1 id="principal">Este sitio es de Peliculas</h1>');
            response.write('<p>Tenemos los siguientes TItulos:</p>');
            response.write('<ul>');
            for (let i in movies) {
                response.write('<li>' + movies[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>')
            response.write('<a href="nuevo">Agregar un nueva pelicula</a>');
            response.write('</body>');
            return response.end();
        });
//SERIE
    }else if(request.url==='/nuevo2' && request.method==='GET'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Lab 10:Rutas y formas</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de Series</h1>');
        response.write('<h2>Aquí nacen las series:</h2>');
        response.write('<form action="nuevo2" method="POST">');
        response.write('<label for="nombre">Titulo: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Euphoria">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de todo</a>');
        response.write('</body>');
        response.end();


    } else if (request.url === '/nuevo2' && request.method === 'POST') {  
        console.log("POST");
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            series.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Lab 10:Rutas y formas</title>');
            response.write('</head><body>');
            response.write('<h1 id="principal">Este sitio es de Series</h1>');
            response.write('<p>Tenemos las siguientes:</p>');
            response.write('<ul>');
            for (let i in series) {
                response.write('<li>' + series[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>')
            response.write('<a href="nuevo2">Agregar un nueva serie</a>');
            response.write('</body>');
            return response.end();
        });
///Anime
    }else if(request.url==='/nuevo3' && request.method==='GET'){
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html lang="es-mx"><head>');
        response.write('<title>Lab 10:Rutas y formas</title>');
        response.write('<meta charset="utf-8">');
        response.write('</head><body>');
        response.write('<h1 id="principal">Este sitio es de Animes</h1>');
        response.write('<h2>Aquí nacen los animes:</h2>');
        response.write('<form action="nuevo3" method="POST">');
        response.write('<label for="nombre">Titulo: </label> ');
        response.write('<input type="text" id="nombre" name="nombre" placeholder="Death Note">');
        response.write('<br><br>');
        response.write('<input type="submit" value="Enviar">');
        response.write('</form>');
        response.write('<br><br>');
        response.write('<a href="/">Regresar a la lista de todo</a>');
        response.write('</body>');
        response.end();

    } else if (request.url === '/nuevo3' && request.method === 'POST') {  
        console.log("POST");
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            animes.push(nuevo_dato);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<meta charset="utf-8">');
            response.write('<title>Lab 10:Rutas y formas</title>');
            response.write('</head><body>');
            response.write('<h1 id="principal">Este sitio es de Animes</h1>');
            response.write('<p>Tenemos las siguientes:</p>');
            response.write('<ul>');
            for (let i in animes) {
                response.write('<li>' + animes[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>')
            response.write('<a href="nuevo3">Agregar un nueva anime</a>');
            response.write('</body>');
            return response.end();
        });

    } else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<!DOCTYPE html>');
        response.write('<html><head>');
        response.write('<meta charset="utf-8">');
        response.write('<title>Capybaras | Not found</title>');
        response.write('</head><body>')
        response.write('<h1 id="principal">Este capybara no existe, amigo.</h1>');
        response.write('</body>');
        response.end();
    }   
});

server.listen(3000);