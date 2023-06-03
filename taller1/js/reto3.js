function clasificarTriangulo() {
  var lado1 = parseFloat(document.getElementById("lado1").value);
  var lado2 = parseFloat(document.getElementById("lado2").value);
  var lado3 = parseFloat(document.getElementById("lado3").value);
  var resultado;
  if (lado1 === lado2 && lado1 === lado3) {
    resultado = "El triángulo es equilátero";
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    resultado = "El triángulo es isósceles";
  } else {
    resultado = "El triángulo es escaleno";
  }
  alert(resultado);
}