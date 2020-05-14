alert('Esta es una calculadora de 5 Digitos');

var n1 = parseInt(prompt("Dime el primer número"));
var signo = prompt('Díme el signo')
var n2 = parseInt(prompt("Dime el segundo número"));
var onequestion = prompt("Quieres seguir?");

if (onequestion == 'si'){
    var n3 = parseInt(prompt("Dime el tercer número"));
    var twoquestion = prompt('Quieres seguir?');
}else {
    document.write (n1+n2);
}

if (twoquestion == 'si'){
    var n4 = parseInt(prompt("Dime el cuarto número"));
    var threequestion = prompt('¿Quieres seguir?');
}else {
    document.write(n1+n2+n3);
}

if(threequestion == 'si'){
    var n5 = parseInt(prompt("Dime el quinto y último número"));
    document.write (n1+n2+n3+n4+n5);
}else{
    document.write (n1+n2+n3+n4);
}



/*
if (signo == "suma"){
    alert('Eureka');
}else if(signo == "+"){
    alert("eureka");
}
*/