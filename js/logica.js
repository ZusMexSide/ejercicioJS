function sumar(a, b) {
    document.getElementById('sumar').innerHTML = a + b;
}

function restar(a, b) {
    document.getElementById('restar').innerHTML = a - b;
}
function multiplicar(a, b) {
    document.getElementById('multiplicar').innerHTML = a * b;
}
function dividir(a, b) {
    document.getElementById('dividir').innerHTML = a / b;
}

function imprimir() {
    var text = "";
    for (var i = 0; i < getCars().length; i++) {
        text = "<tr>" + "<th>" + text + "<h1>" + getCars()[i] + "</h1>" + "</th>" + "</tr>";
    }
    document.getElementById('tabla').innerHTML = text;
    document.getElementById('tabla').style.display="inline-block";
}
function getCars() {
    var cars = ["bmw", "volvo", "saab", "ford"];
    return cars;
}
function limpiar() {
   /* var text = "";
    for (var i = 0; i < getCars().length; i++) {
        text = "<tr>" + "<th>" + text + "<h1>" + text + "</h1>" + "</th>" + "</tr>";
    }*/
    document.getElementById('tabla').style.display="none";
}
