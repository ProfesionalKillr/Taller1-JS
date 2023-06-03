function comprobarRespuesta() {
  var nombres = ["Nombre1", "Nombre2", "Nombre3"];
  var apellidos = ["Apellido1", "Apellido2", "Apellido3"];
  var actividades = ["Actividad1", "Actividad2", "Actividad3"];

  var nombreSeleccionado = document.getElementById("nombreSeleccionado").value;
  var apellidoSeleccionado = document.getElementById("apellidoSeleccionado").value;
  var actividadSeleccionada = document.getElementById("actividadSeleccionada").value;

  var indice = nombres.indexOf(nombreSeleccionado);

  if (indice !== -1 && apellidos[indice] === apellidoSeleccionado && actividades[indice] === actividadSeleccionada) {
    alert("La respuesta es correcta");
  } else {
    alert("La respuesta es incorrecta");
  }
}