
function calcularPerimetro(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function calcularArea(lado1, lado2) {
  return lado1 * lado2;
}

function calcularFigura() {
  var figuraSeleccionada = document.getElementById("figuraSeleccionada").value;
  var resultado;

  switch (figuraSeleccionada) {
    case "1":
      var radio = parseFloat(document.getElementById("radio").value);
      resultado = 2 * Math.PI * radio;
      break;
    case "2":
      var base = parseFloat(document.getElementById("baseTriangulo").value);
      var altura = parseFloat(document.getElementById("alturaTriangulo").value);
      resultado = calcularArea(base, altura);
      break;
    case "3":
      var baseRectangulo = parseFloat(document.getElementById("baseRectangulo").value);
      var alturaRectangulo = parseFloat(document.getElementById("alturaRectangulo").value);
      resultado = calcularPerimetro(baseRectangulo, alturaRectangulo, baseRectangulo, alturaRectangulo);
      break;
    case "4":
      var ladoCuadrado = parseFloat(document.getElementById("ladoCuadrado").value);
      resultado = calcularPerimetro(ladoCuadrado, ladoCuadrado, ladoCuadrado, ladoCuadrado);
      break;
    default:
      alert("Opción inválida");
  }

  if (resultado !== undefined) {
    alert("Resultado: " + resultado);
  }
}