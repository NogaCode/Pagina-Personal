var n1 = parseInt(prompt("Dime el primer numero"));
var n2 = parseInt(prompt("Dime el segundo numero"));
var onequestion = prompt("¿Quieres seguir?");

if (onequestion == "si"){
    var n3 = parseInt(prompt("Dime el tercer numero"));
    var twoquestion = prompt("¿Quieres seguir?");
}else{
    document.write("Primer operacion");
}

if(twoquestion == "si"){
    var n4 = parseInt(prompt("Dime el cuarto numero"));
    var threequestion = prompt("¿Quieres seguir?");
}else{
    document.write("segunda operacion");
}

if(threequestion == "si"){
    var n5 = parseInt(prompt("Dime el quinto y último numero")); 
    document.write(n1+n2+n3+n4+n5);
}
