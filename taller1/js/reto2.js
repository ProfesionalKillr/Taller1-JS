function realizarConversion() {
  var temperatura = parseFloat(document.getElementById("temperatura").value);
  var conversionDe = document.getElementById("conversionDe").value;
  var conversionA = document.getElementById("conversionA").value;
  var resultado;

  if (conversionDe === "1") {
    // Convertir de Fahrenheit a Celsius o Kelvin
    if (conversionA === "2") {
      resultado = (temperatura - 32) * 5 / 9;
    } else if (conversionA === "3") {
      resultado = (temperatura - 32) * 5 / 9 + 273.15;
    }
  } else if (conversionDe === "2") {
    // Convertir de Celsius a Fahrenheit o Kelvin
    if (conversionA === "1") {
      resultado = (temperatura * 9 / 5) + 32;
    } else if (conversionA === "3") {
      resultado = parseFloat(temperatura) + 273.15;
    }
  } else if (conversionDe === "3") {
    // Convertir de Kelvin a Fahrenheit o Celsius
    if (conversionA === "1") {
      resultado = (temperatura - 273.15) * 9 / 5 + 32;
    } else if (conversionA === "2") {
      resultado = temperatura - 273.15;
    }
  }

  alert("Resultado de la conversión: " + resultado);
}