export { validarFormulario };

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
    patternMismatch: "Solo acepta letras y espacios en blanco",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío",
    patternMismatch:
      "Acepta todo tipo de letras, numeros y caracteres especiales",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es valido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch:
      "Al menos una letra mayuscula, una minuscula, un digito, sin caracteres especiales y sin espacios. Longitud entre 6 y 12 caracteres",
  },
  imgBase64: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch: "Debe ser el código de una imagen en base 64",
  },
  categoria: {
    valueMissing: "El campo categoria de producto no puede estar vacío",
    patternMismatch:
      "Acepta todo tipo de letras, numeros y caracteres especiales",
  },
  nombreProducto: {
    valueMissing: "El campo nombre de producto no puede estar vacío",
    patternMismatch:
      "Acepta todo tipo de letras, numeros y caracteres especiales",
  },
  precio: {
    valueMissing: "El campo precio de producto no puede estar vacío",
    patternMismatch:
      "debe tener simbolo $, numeros, coma y puntos. ejemplo: $123,123.00",
  },
  descripcion: {
    valueMissing: "El campo descripción de producto no puede estar vacío",
    patternMismatch:
      "Acepta todo tipo de letras, numeros y caracteres especiales",
  },
};
/*##########################################*/

/* const validadores = {
  nacimiento: (input) => validarNacimiento(input),
}; */

function mostrarMensajeDeError(tipoDeElemento, elemento) {
  let mensaje = "";

  tipoDeErrores.forEach((error) => {
    if (elemento.validity[error] === true) {
      console.log(tipoDeElemento, error);
      console.log(elemento.validity[error]);
      console.log(mensajesDeError[tipoDeElemento][error]);

      mensaje = mensajesDeError[tipoDeElemento][error];
    }
  });

  return mensaje;
}

function validarFormulario(elemento) {
  const tipoDeElemento = elemento.dataset.tipo;

  /* if (validadores[tipoDeElemento] === true) {
    validadores[tipoDeElemento](elemento);
  } */

  if (elemento.validity.valid === true) {
    elemento.classList.remove("incorrecto");
  } else {
    elemento.classList.add("incorrecto");
  }
}
