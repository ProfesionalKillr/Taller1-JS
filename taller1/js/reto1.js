function realizarOperacion() {
    var palabra = document.getElementById("palabra").value;
    var opcion = document.getElementById("opcion").value;
    var resultado;

    switch (opcion) {
      case "1":
        resultado = "Longitud de la palabra: " + palabra.length;
        break;
      case "2":
        resultado = "Palabra en mayúsculas: " + palabra.toUpperCase();
        break;
      case "3":
        resultado = "Palabra en minúsculas: " + palabra.toLowerCase();
        break;
      case "4":
        resultado = "Primer carácter: " + palabra.charAt(0);
        break;
      default:
        resultado = "Opción inválida";
    }

    alert(resultado);
  }