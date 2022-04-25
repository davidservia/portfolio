/* javascript para el ejercicio 2 de portfolio de lenguaje de marcas */

function calcular() {

    // obtener dato (radio)

    const PI = 3.1416; // no seria necesario, esta en la libreria matematica basica de Js
    let radio = Number(document.getElementById('radio').value);

    // realizar calculos

    let circulo = PI * radio ** 2;
    let perimetro = 2 * PI * radio;
    let circunferencia = 2* radio*PI;
    let esfera = PI * radio ** 3;

    // mostrar resultados

    // te atreves a refactorizar la salida de resultados????

    document.getElementById('circunferencia').innerHTML = "La loongitud de la circunferencia es : " + circunferencia;

    document.getElementById('perimetro').innerHTML = "El perimetro es : " + perimetro;

    document.getElementById('esfera').innerHTML = "El volumen de la esfera es : " + esfera;

    document.getElementById('circulo').innerHTML = "El volumen del circulo es : " + circulo;




}