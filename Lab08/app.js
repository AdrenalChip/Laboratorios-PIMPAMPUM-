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
}
var promedio2=promedio/contador;
console.log(promedio2);

console.log("Recibe un string y genera el archivo de texto");
const filesystem = require('fs');
filesystem.writeFileSync('lab08.txt','Escribe, prueba y ejecuta con node, scripts de js para los siguientes ejercicios y problemas. Muestra los resultados en consola: Una función que reciba un arreglo de números y devuelva su promedio. Una función que reciba un string y escriba el string en un archivo de texto. Apóyate del módulo fs.Escoge algún problema que hayas implementado en otro lenguaje de programación, y dale una solución en js que se ejecute sobre node.');

const numero=20;
var contador=0;
for(let i=0;i<=numero;i++){
    contador=contador+i;
}
console.log(contador);


const http=require('http');
const server= http.createServer((request,response)=>{
    response.setHeader('Content-Type','text/html');
    response.write("");
    response.end();

});

server.listen(3000);