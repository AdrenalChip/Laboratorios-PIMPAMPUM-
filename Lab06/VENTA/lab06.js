
var botonelement=document.getElementById("Comprar");
var escribir=document.getElementById("ff");
var contador=0;
botonelement.onclick=()=>{
    contador++;
    escribir.innerHTML=contador;
    subtotal();
}


var botonelement2=document.getElementById("Comprar2");
var escribir2=document.getElementById("hi");
var contador2=0;
botonelement2.onclick=()=>{
    contador2++;
    escribir2.innerHTML=contador2;
    subtotal();
}


var botonelement3=document.getElementById("Comprar3");
var escribir3=document.getElementById("ii");
var contador3=0;
botonelement3.onclick=()=>{
    contador3++;
    escribir3.innerHTML=contador3;
subtotal();
}

function subtotal(){
    let total;
    total=(contador*40)+(contador2*40)+(contador3*40)
    document.getElementById("subtotal").innerHTML=total;
}
function regresa(){
    document.getElementById("texto").style.fontStyle="oblique";
}

document.getElementById("texto").onclick=()=>{
    document.getElementById("texto").style.fontStyle = "italic";
    document.getElementById("texto").onclick=regresa; 
}
