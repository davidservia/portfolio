/* 



*/

function comparar() {
    // entrada de datos
    let lado1 = Number(document.getElementById('lado1').value);
    let lado2 = Number(document.getElementById('lado2').value);
    let lado3 = Number(document.getElementById('lado3').value);

    let respuesta = "";
    // vamosa evaluar que tipo de triangulo es
    if (lado1 == lado2 && lado2 == lado3) {
        respuesta = "es equilátero";
    } else {
        if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
            respuesta = "es isósceles";
        } else {
            respuesta = "es escaleno";
        }
    }
    document.getElementById('respuestaTipo').innerHTML = "El triangulo " + respuesta;
}