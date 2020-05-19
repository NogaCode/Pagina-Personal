
var n1 = parseInt(prompt("Dime el primer número"));
var signo = prompt('Díme el signo')
var n2 = parseInt(prompt("Dime el segundo número"));
var onequestion = prompt("Quieres seguir?");


//---------------------------------Operacion N1----------------------------------

//-------------------------------------Suma--------------------------------------
if (signo == "suma"){
    document.write("El resultado de la operacion es: ", n1+n2);
    var numerosimple1 = (n1+n2);
}else if(signo == "+"){
    document.write("El resultado de la operacion es: ", n1+n2);
    var numerosimple1 = n1+n2;
}
//-------------------------------------Resta------------------------------------
if (signo == "resta"){
    document.write("El resultado de la operacion es: ", n1-n2);
    var numerosimple1 = (n1-n2);
}else if(signo == "-"){
    document.write("El resultado de la operacion es: ", n1-n2);
    var numerosimple1 = (n1-n2);
}
//-------------------------------------Division----------------------------------
if (signo == "division"){
    document.write("El resultado de la operacion es: ", n1/n2);
    var numerosimple1 = (n1/n2);
}else if(signo == "/"){
    document.write("El resultado de la operacion es: ", n1/n2);
    var numerosimple1 = (n1/n2);
}
//-----------------------------------Multiplicacion------------------------------
if (signo == "multiplicacion"){
    document.write("El resultado de la operacion es: ", n1*n2);
    var numerosimple1 = (n1*n2);
}else if(signo == "*"){
    document.write("El resultado de la operacion es: ", n1*n2);
    var numerosimple1 = (n1*n2);
}

//---------------------------Simplificacion de numeros---------------------------
var numerosimple = (n1+n2);
console.log(numerosimple);
//console.log(restasimple) ;
//console.log(divisionsimple);
//console.log(multiplicacionsimple);


//-----------------------------------Pregunta N2------------------------------
if (onequestion == "si"){
    var signo2 = prompt("Dime el signo");
    var n3 = parseInt(prompt("Dime el tercer número"));
//-----------------------------------Operacion N2--------------------------------

 //-------------------------------------Suma-------------------------------------
if (signo2 == "suma"){
    document.write("El resultado de la operacion es: ", numerosimple1 + n3 );
    var numerosimple2 = (numerosimple1 + n3);
}else if(signo2 == "+"){
    document.write("El resultado de la operacion es: ", numerosimple1+n3);
    var numerosimple2 = (numerosimple1 + n3);
}

//-------------------------------------Resta------------------------------------
if (signo2 == "resta"){
    document.write("El resultado de la operacion es: ", numerosimple1-n3);
    var numerosimple2 = (numerosimple1 - n2);
}else if(signo2 == "-"){
    document.write("El resultado de la operacion es: ", numerosimple1-n3);
    var numerosimple2 = (numerosimple1 - n2);
}
//-------------------------------------Division----------------------------------
if (signo2 == "division"){
    document.write("El resultado de la operacion es: ", numerosimple1/n3);
    var numerosimple2 = (numerosimple1 / n2);
}else if(signo2 == "/"){
    document.write("El resultado de la operacion es: ", numerosimple1/n3);
    var numerosimple2 = (numerosimple1 / n2);
}
//-----------------------------------Multiplicacion------------------------------
if (signo2 == "multiplicacion"){
    document.write("El resultado de la operacion es: ", numerosimple1*n3);
    var numerosimple2 = (numerosimple1 * n2);
}else if(signo2 == "*"){
    document.write("El resultado de la operacion es: ", numerosimple1*n3);
    var numerosimple2 = (numerosimple1 * n2);
}

    console.log(signo2);
    var twoquestion = prompt("Quieres seguir?");
}

console.log(numerosimple2);
//-----------------------------------Pregunta N2------------------------------
if (twoquestion == "si"){
    var signo3 = prompt('Dime el signo que desees')
    var n4 = parseInt(prompt('Dime el cuarto número'));
}

//-----------------------------------Suma-------------------------------------
if(signo3 == "suma"){
    document.write ("El resultado de la operacion es: ", numerosimple2 + n4);
    var numerosimple3 = (numerosimple2 + n4);
} else if (signo3 == "+"){
    document.write ("El resultado de la operacion es: ", numerosimple2+n4);
    var numerosimple3 = (numerosimple2 + n4);    
}

//-----------------------------------Resta-------------------------------------

if(signo3 == "resta"){
    document.write ('El resultado de la operacion es: ', numerosimple2 - n4);
    var numerosimple3 = (numerosimple2 - n4);
}else if (signo3 == "-"){
    document.write ('El resultado de la operacion es: ', numerosimple2 - n4);
    var numerosimple3 = (numerosimple2 - n4);    
}

//-----------------------------------Divicion-------------------------------------

if(signo3 == "division"){
    document.write ('El resultado de la operacion es: ', numerosimple2 / n4);
    var numerosimple3 = (numerosimple2 / n4);
}else if (signo3 == "/"){
    document.write ('El resultado de la operacion es: ', numerosimple2 / n4);
    var numerosimple3 = (numerosimple2 / n4);    
}

//-----------------------------------Multiplicacion---------------------------------

if(signo3 == "multiplicacion"){
    document.write ('El resultado de la operacion es: ', numerosimple2 * n4);
    var numerosimple3 = (numerosimple2 * n4);
}else if (signo3 == "*"){
    document.write ('El resultado de la operacion es: ', numerosimple2 * n4);
    var numerosimple3 = (numerosimple2 * n4);    
}

console.log(numerosimple3);

