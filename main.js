/*

var n1 = parseInt(prompt('Dime un numero'));
var n2 = parseInt(prompt('Dime un numero'));


var suma = (n1+n2);
var resta = (n1-n2);
var division = (n1/n2);
var multiplicacion = (n1*n2);

if(n2 == 0){
    var division = "La division es erronea, vuelva a intentarlo";
}

var seguir = prompt("Dime, ¿Quieres seguir?");

if (seguir == "si"){
    alert('Funciona');
}

document.write("<p>La suma es: ", suma ,"</br></p>");
document.write("<p>La resta es: ", resta,'</br></p>');
document.write("<p>La division es: ", division,'</br></p>');
document.write("<p>La multiplicacion es: ", multiplicacion,'</br></p>');

*/

var n1 = parseInt(prompt("Dime el primer numero"));
var signo1 =  prompt("El signo");
var n2 = parseInt(prompt("Dime el primer numero"));

document.write(n1,signo1,n2);

if (signo == "suma"){
    var simplesuma = (n1+n2);
}
