// Pidiendo numeros al usuario

var n1 = parseInt(prompt("Dime el primer número"));
var signo = prompt("Díme el signo");
var n2 = parseInt(prompt("Dime el segundo número"));
var onequestion = prompt("Quieres seguir?");

//---------------------------------Operacion N1----------------------------------

//Suma

if (signo == "suma" || signo == "+") {
  document.write("El resultado de ",n1," ",signo," ",n2, " Es: ",n1 + n2,"</br>");
  var numerosimple1 = n1 + n2;
}

//Resta

if (signo == "resta" || signo == "-") {
  //document.write("El resultado de la operacion es: ", n1 - n2);
  document.write("El resultado de ",n1," ",signo," ",n2," Es: ",n1 - n2,"</b);
  var numerosimple1 = n1 - n2;
}

//Division

if (signo == "division" || signo == "/") {
  //document.write("El resultado de la operacion es: ", n1 / n2);
  document.write("El resultado de ",n1," ",signo," ",n2," Es: ",n1 / n2, "</b);
  var numerosimple1 = n1 / n2;
}

//Multiplicacion

if (signo == "multiplicacion" || signo == "*") {
  //document.write("El resultado de la operacion es: ", n1 * n2);
  document.write("El resultado de ",n1," ",signo," ",n2," Es: ",n1 * n2,"</br>");
  var numerosimple1
}

//Llamo a los numeros

var numerosimple = n1 + n2;
console.log(numerosimple1);

//-----------------------------------Pregunta N2------------------------------

if (onequestion == "si") {
  var signo2 = prompt("Dime el signo");
  var n3 = parseInt(prompt("Dime el tercer número"));

  //-----------------------------------Operacion N2--------------------------------

  //Suma

  if (signo2 == "suma" || signo2 == "+") {
    //document.write("El resultado de la operacion es: ", numerosimple1 + n3);
    document.write("El resultado de ",numerosimple1," ",signo2," ",n3," Es: ",numerosimple1 + n3,"</);
    var numerosimple2 = numerosimple1 + n3;
  }

  //Resta

  if (signo2 == "resta" || signo2 == "-") {
    //document.write("El resultado de la operacion es: ", numerosimple1 - n3);
    document.write("El resultado de ",numerosimple1," ",signo2," ",n3," Es: ",numerosimple1 - n3,"</br>");
    var numerosimple2 = numerosimple1 - n3;
  }

  //Division

  if (signo2 == "division" || signo2 == "/") {
    //document.write("El resultado de la operacion es: ", numerosimple1 / n3);
    document.write("El resultado de ",numerosimple1," ",signo2," ",n3," Es: ",numerosimple1 / n3,"</);
    var numerosimple2 = numerosimple1 / n3;
  }

  //Multiplicacion

  if (signo2 == "multiplicacion" || signo2 == "*") {
    //document.write("El resultado de la operacion es: ", numerosimple1 * n3);
    document.write("El resultado de ",numerosimple1," ",signo2," ",n3," Es: ",numerosimple1 * n3,"</br>");
    var numerosimple2 = numerosimple1 * n3;
  }
  console.log(signo2);
  var twoquestion = prompt("Quieres seguir?");
}

console.log(numerosimple2);

//-----------------------------------Pregunta N2------------------------------

if (twoquestion == "si") {
  var signo3 = prompt("Dime el signo que desees");
  var n4 = parseInt(prompt("Dime el cuarto número"));
}
console.log(signo3);

//Suma

if (signo3 == "suma" || signo3 == "+") {
  //document.write("El resultado de la operacion es: ", numerosimple2 + n4);
  document.write("El resultado de ",numerosimple2," ",signo3," ",n4," Es: ",numerosimple2 + n4,"</b);
  var numerosimple3 = numerosimple2 + n4;
}

//Resta

if (signo3 == "resta" || signo3 == "-") {
  //document.write("El resultado de la operacion es: ", numerosimple2 - n4);
  document.write("El resultado de ",numerosimple2," ",signo3," ",n4," Es: ",numerosimple2 - n4,"</br>");
  var numerosimple3 = numerosimple2 - n4;
}

//Divicion

if (signo3 == "division" || signo3 == "/") {
  //document.write("El resultado de la operacion es: ", numerosimple2 / n4);
  document.write("El resultado de ",numerosimple2," ",signo3," ",n4," Es: ",numerosimple2 / n4,"</b);
  var numerosimple3 = numerosimple2 / n4;
}

//Multiplicacion

if (signo3 == "multiplicacion" || signo3 == "*") {
  //document.write("El resultado de la operacion es: ", numerosimple2 * n4);
  document.write("El resultado de ",numerosimple2," ",signo3," ",n4," Es: ",numerosimple2 * n4,"</br>");
  var numerosimple3 = numerosimple2 * n4;
}
console.log(n4);
console.log("=");
console.log(numerosimple3);

/*--------------------------------------------Seccion Notas--------------------------------

La calculadora, el maximo de lineas de codigo fue de 143 lineas. 
Esas lineas de codigo las optimize a 105
El codigo se hizo muy largo ya que hice lo siguiente, cosa que esta mal:


if(signo3 == "multiplicacion"){
    document.write ('El resultado de la operacion es: ', numerosimple2 * n4);
    var numerosimple3 = (numerosimple2 * n4);
}else if (signo3 == "*"){
    document.write ('El resultado de la operacion es: ', numerosimple2 * n4);
    var numerosimple3 = (numerosimple2 * n4);    
}

Y lo simplifique de la siguiente manera:

if(signo3 == "multiplicacion" || signo3 == "*"){
    document.write ('El resultado de la operacion es: ', numerosimple2 * n4);
    var numerosimple3 = (numerosimple2 * n4);
}

*/
