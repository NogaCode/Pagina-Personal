var n1 = parseInt(prompt('Dime el primer numero'));
var signo1 = prompt('¿Suma, resta, multiplicacion o division?');
var n2 = parseInt(prompt('Dime el segundo numero'));

if (signo1 == "suma"){
    document.write(n1+n2);
}

if (signo1 == "resta"){
    document.write(n1-n2);
}
if (signo1 == "division"){
    document.write(n1/n2);
}
if (signo1 == "multiplicacion"){
    document.write(n1*n2);
}
