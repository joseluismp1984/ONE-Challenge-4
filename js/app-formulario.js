import { validarFormulario } from "./validaciones-formulario.js";

const entradas = document.querySelectorAll(".entrada");

entradas.forEach((entrada) => {
  entrada.addEventListener("blur", (evento) => {
    validarFormulario(evento.target);
  });
});
