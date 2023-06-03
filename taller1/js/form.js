function validarFormulario() {
    // Obtener referencias a los campos del formulario
    var tipoDocumento = document.getElementById("tipoDocumento").value;
    var numeroDocumento = document.getElementById("numeroDocumento").value;
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
    var correoElectronico = document.getElementById("correoElectronico").value;
    var password = document.getElementById("password").value;
    var confirmarPassword = document.getElementById("confirmarPassword").value;
    var terminosUso = document.getElementById("terminosUso").checked;

    // Validar que todos los campos sean ingresados
    if (
      tipoDocumento === "" ||
      numeroDocumento === "" ||
      nombre === "" ||
      apellido === "" ||
      fechaNacimiento === "" ||
      correoElectronico === "" ||
      password === "" ||
      confirmarPassword === ""
    ) {
      alert("Todos los campos son obligatorios");
      return false;
    }

    // Validar el campo número de documento (solo números y longitud mínima de 5)
    if (!/^\d+$/.test(numeroDocumento) || numeroDocumento.length < 5) {
      alert("El campo número de documento debe contener solo números y tener una longitud mínima de 5 caracteres");
      return false;
    }

    // Validar los campos nombre y apellido (caracteres alfanuméricos)
    if (!/^[a-zA-Z0-9]+$/.test(nombre) || !/^[a-zA-Z0-9]+$/.test(apellido)) {
      alert("Los campos nombre y apellido deben contener solo caracteres alfanuméricos");
      return false;
    }

    // Validar la fecha de nacimiento (mayores de 18 años)
    var fechaActual = new Date();
    var fechaLimite = new Date(fechaActual.getFullYear() - 18, fechaActual.getMonth(), fechaActual.getDate());
    var fechaIngresada = new Date(fechaNacimiento);

    if (fechaIngresada > fechaLimite) {
      alert("Debes tener al menos 18 años para registrarte");
      return false;
    }

    // Validar el correo electrónico (dominio @misena.edu.co)
    if (!correoElectronico.endsWith("@misena.edu.co")) {
      alert("El campo correo electrónico debe tener el dominio @misena.edu.co");
      return false;
    }

    // Validar la contraseña (mínimo una letra mayúscula, un número, una letra minúscula, un carácter y mínimo 10 caracteres)
    if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}/.test(password)) {
      alert("El campo contraseña debe tener al menos una letra mayúscula, una letra minúscula, un número, un carácter especial y tener una longitud mínima de 10 caracteres");
      return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmarPassword) {
      alert("Las contraseñas no coinciden");
      return false;
    }

    // Validar que se haya aceptado los términos de uso
    if (!terminosUso) {
      alert("Debes aceptar los términos de uso");
      return false;
    }

    return true;
  }

  function mostrarTerminosUso() {
    var terminosUso = "Aquí van los términos de uso del formulario.";
    alert(terminosUso);
  }