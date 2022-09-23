//variables
let inicial = parseInt(prompt('Introduce el numero inicial del rango'));
let final = parseInt(prompt('Introduce el numero final del rango'));


for (let i = inicial; i <= final; i++) {
    // vamos a acumular en la variable perfecto la suma de divisores
    let perfecto = 1;

    for (let j = 2; j < i; j++) {
        // si se divide; el resto tiene que dar como resultado 0 para poder almacanarlo en la variable. 
        if (i % j == 0) {
            perfecto = perfecto + (i / j);
        }
    }
    //la suma calculada tiene que ser igual la variable perfecto
    if (i == perfecto && perfecto != 1) {
        document.write(`${i}` + '</br>');
    }
}

if (isNaN(inicial)) {
    // validacion numero inicial
    alert("no ingreso rango inicial")
    document.write("Error. Por favor ingresar el rango inicial")

} else if (isNaN(final)) {
    // validacion numero final
    alert("no ingreso rango final")
    document.write("Error. Por favor ingresar el rango final")
} else {
    //aviso o alerta para decir que el aplicativo ya acabo
    alert("He terminado de buscar")
}


