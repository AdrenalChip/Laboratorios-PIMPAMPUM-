const numero=prompt("Un numero porfavor:")

const rows=numero;

function Tabla_cuadrados(){
document.write("<table style= 'border: 100px solid negro;'>");
document.write("<thead> <tr> <th>Numero</th> <th>Cuadrado</th> <th> Cubo</th> </ tr>")
document.write("</ thead>");
document.write("<tbody>")   ; 
    for (var i=1;i<=numero;i++){//esto como un renglon 
        document.write('<tr>');
            document.write('<td>'+ i +'</td>');
            document.write('<td>' +i*i+'</td>');
            document.write('<td>' +i*i*i+'</td>');
        document.write('</tr>');
    }
document.write('</tbody>');
document.write('</table>');
}

Tabla_cuadrados();

function SumaRandom(resul,suma){
    if (suma==resul){
        alert("\tCorrecto\n")
    }else{
        alert("\tIncorrecto\n")
    }
}

function Tiempo(){
    var fechaHora = new Date();
    var segundos = fechaHora.getSeconds();
   return segundos;
}
function Tiempo1(){
    var fechaHora1 = new Date();
    var segundos1 = fechaHora1.getSeconds();
    return segundos1;
}
const seg=Tiempo();


const num1=Math.floor(Math.random()*100);
const num2=Math.floor(Math.random()*100);;

const suma=prompt("La suma de " + num1 + " + "+num2);

const resul=num1+num2;
SumaRandom(resul,suma);

const seg1=Tiempo1();

document.write("Tardo "+(seg1-seg)+" segundos en resolver la suma")

const arreglo=[-1,0,-3,0,5,6,-7,8];

function contador(arreglo){
    let ceros=0;
    let negativos=0;
    let mayores_cero=0;
    for (let i=0;i<=9;i++){
        if(arreglo[i]==0){
            ceros=ceros+1;
        }
        if (arreglo[i]>0){
            mayores_cero=mayores_cero+1;
        }
        if(arreglo[i]<0){
            negativos=0+1;
        }
    }
    document.write('La cantidad de ceros: '+ ceros+'<br> La cantidad de negativos:'+negativos+'<br> La cantidad de numeros mayores a ceros: '+mayores_cero);
}

contador(arreglo);