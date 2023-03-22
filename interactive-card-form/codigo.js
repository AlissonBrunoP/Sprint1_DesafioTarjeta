function validarFormulario(event) {
  const titularTC = document.getElementById("titularTC").value;
  const numeroTC = document.getElementById("numeroTC").value;
  const mesVencimiento = document.getElementById("mesVencimiento").value;
  const anioVencimiento = document.getElementById("anioVencimiento").value;
  const cvcTarjeta = document.getElementById("cvcTarjeta").value;

  if (titularTC === "") {
    mostrarError("errorTitularTC", "Please enter the cardholder's name");
    event.preventDefault();
    return false;
  } else {
    errorTitularTC.innerHTML = "";
  }

  if (numeroTC === "" || isNaN(numeroTC)) {
    mostrarError("errorNumeroTC", "Please enter a valid card number");
    event.preventDefault();
    return false;
  } else {
    errorNumeroTC.innerHTML = "";
  }

  if (
    mesVencimiento === "" ||
    isNaN(mesVencimiento) ||
    mesVencimiento < 1 ||
    mesVencimiento > 12
  ) {
    mostrarError(
      "errorMesVencimiento",
      "Please enter a valid expiration month (MM)"
    );
    event.preventDefault();
    return false;
  } else {
    errorMesVencimiento.innerHTML = "";
  }

  if (
    anioVencimiento === "" ||
    isNaN(anioVencimiento) ||
    anioVencimiento < 0 ||
    anioVencimiento > 99
  ) {
    mostrarError(
      "errorAnioVencimiento",
      "Please enter a valid expiration year (YY)"
    );
    event.preventDefault();
    return false;
  } else {
    errorAnioVencimiento.innerHTML = "";
  }

  if (cvcTarjeta === "" || isNaN(cvcTarjeta)) {
    mostrarError("errorCvcTarjeta", "Please enter a valid CVC code");
    event.preventDefault();
    return false;
  } else {
    errorCvcTarjeta.innerHTML = "";
  }

  mostrarAgradecimiento();
  return true;
}

function mostrarError(idCampo, mensaje) {
  const campo = document.getElementById(idCampo);
  campo.innerHTML = mensaje;
}

function mostrarAgradecimiento() {
  const formulario = document.getElementById("formulario");
  formulario.style.display = "none";

  const agradecimiento = document.getElementById("agradecimiento");
  agradecimiento.classList.remove("oculto");
}

//aca falta mostrar agradecimiento en el boton clic

//aca se agrega en simultaneo lo que se escribe en el input con la tarjeta

const numeroTC = document.getElementById("numeroTC");
const numeroTCValor = document.getElementById("TCNumeros");

numeroTC.addEventListener("input", function () {
  numeroTCValor.innerHTML = "<p>" + numeroTC.value.toUpperCase() + "</p>";
});

const titularTC = document.getElementById("titularTC");
const titularTCValor = document.getElementById("TCNombre");

titularTC.addEventListener("input", function () {
  titularTCValor.innerHTML =
    "<p>" + titularTC.value.toUpperCase().substring(0, 20) + "</p>";
});

const mesVencimiento = document.getElementById("mesVencimiento");
const mesTCValor = document.getElementById("TCVencMes");

mesVencimiento.addEventListener("input", function () {
  mesTCValor.textContent = mesVencimiento.value.toUpperCase();
});

const anioVencimiento = document.getElementById("anioVencimiento");
const anioTCValor = document.getElementById("TCVencAnio");

anioVencimiento.addEventListener("input", function () {
  anioTCValor.textContent = anioVencimiento.value.toUpperCase();
});
