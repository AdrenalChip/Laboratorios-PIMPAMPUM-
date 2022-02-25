console.log("Promedio de un arreglo");
//fs: filesystem
/*const filesystem = require('fs');
filesystem.writeFileSync('hola.txt','Hola desde node');
*/
const arreglo=[5000,60,90,100,10,20,0,120,2000,340,1000,50];
var promedio=0;
var contador=0;
for(let item of arreglo){
    contador=contador+1;
    promedio=promedio+item;
};
var promedio2=promedio/contador;
console.log(promedio2);

console.log("Recibe un string y genera el archivo de texto");
const filesystem = require('fs');
filesystem.writeFileSync('lab08.txt','Escribe, prueba y ejecuta con node, scripts de js para los siguientes ejercicios y problemas. Muestra los resultados en consola: Una función que reciba un arreglo de números y devuelva su promedio. Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.');

const numero=20;
var contador=0;
for(let i=0;i<=numero;i++){
    contador=contador+i;
};
console.log(contador);


const http=require('http');

const server= http.createServer((request, response) => {
    console.log(request.url);
    response.setHeader('Content-Type','text/html');
   response.write('<!DOCTYPE html><html>');
    response.write('<head><title>Lab 01:Introduccion</title></head>');
    response.write(' <body> <div class="headshoulders"><h1>Lab 01<br>Introducción a las aplicaciones web, HTML5 y ciclo de vida de los sistemas de información</h1><h4>Jorge Guerrero Díaz <br>A01411752 <br>jorge.guerrero.0023@gmail.com <br><a href="https://open.spotify.com/user/karimebell?si=bbe197d2bfd2415b" class="link"> Spotify <br> </a><a href="https://github.com/AdrenalChip" class="link"> Github </a></h4><hr/></div>');
    response.write('<ul class="ulclases"> <h2> Mis gustos:</h2><li >Peliculas Favoritas:</li> <ul class="respuestas">                                                        <li>Forrest Gump</li><li>Last Night in Soho</li><li>Jojo Rabbit</li><li>The Nightmare Before Christmas</li><li>El Niño y la Bestia</li></ul><li>Videojuegos favoritos:</li><ul class="respuestas"><li>Assasins Creed Brotherhood</li><li>Pokemon Fire Red</li><li>Smite</li></ul><li>Libros Favoritos:</li><ul class="respuestas"><li>Alex Quiere un Dinosaurio</li><li>El Niño en la Cima de la Montaña  </li><li>Mistborn</li><li>El Salvaje</li><li>Las Ventajas de Ser Invisible</li></ul></ul>');
    response.write('</body></html>');
    response.end();

});

server.listen(3000);