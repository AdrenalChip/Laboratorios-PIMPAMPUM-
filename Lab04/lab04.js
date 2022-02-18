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
    document.write('<br>La cantidad de ceros: '+ ceros+'<br> La cantidad de negativos:'+negativos+'<br> La cantidad de numeros mayores a ceros: '+mayores_cero);
}

function promedio(arreglos){
    let prom=[0,0,0];
    let proms=0;
    for (let i=0;i<=2;i++){
        for (let j=0;j<=3;j++){
            proms=proms+arreglos[i][j];
        }
        proms=proms/4;
        prom[i]=proms;
        proms=0;
    }
    document.write('<br> El promedio de esto es '+prom+'<br>');
}
contador(arreglo);

const arreglos=[
    [1,3,5,6],[4,5,8,9],[9,19,4,5]
];
promedio(arreglos);

function inverso(num){
    document.write (
        parseFloat(
          num
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(num)
      )                 
}

const invertir=prompt("Numero para conseguir el inverso");
document.write('El inverso de '+invertir+' es ');
inverso(invertir);

function hoja_personajes(nuevo_nombre,nuevo_nivel,nueva_Clase){
    this.nombre=nuevo_nombre;
    this.nivel=nuevo_nivel;
    this.clase=nueva_Clase;
    this.moneda=10000;
    this.imprimir=imprimir_personaje
}

function imprimir_personaje(){
    document.write("<br>",this.nombre," ",this.nivel," ",this.clase," <br>");
}

mi_personaje=new hoja_personajes("Alfredo Godofredo",45,"Monje");
mi_personaje.imprimir();