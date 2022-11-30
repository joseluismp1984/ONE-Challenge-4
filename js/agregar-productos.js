function codigoGen() {
  let dig = [];
  let i = 0;

  while (i < 5) {
    dig[i] = Math.floor(Math.random() * 10);
    i++;
  }

  let letter = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let code =
    "#" +
    dig[0] +
    dig[1] +
    dig[2] +
    dig[3] +
    dig[4] +
    letter[Math.floor(Math.random() * 26)];

  return code;
}

/*----------------------------------------*/

const agregarProducto = (categoria, imagen, nombre, precio, descripcion) => {
  return fetch("http://localhost:3000/productos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      categoria,
      imagen,
      nombre,
      precio,
      codigo: codigoGen(),
      descripcion,
      id: uuid.v4(),
    }),
  });
};

/*----------------------------------------*/

const formulario = document.querySelector("[data-agregarProducto]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const categoria = document.querySelector("#categoria").value;
  const imagen = document.querySelector("#imgBase64").value;
  const nombre = document.querySelector("#nombreProducto").value;
  const precio = document.querySelector("#precio").value;
  const descripcion = document.querySelector("#descripcion").value;

  document.querySelector("#imgBase64").value = "";
  document.querySelector("#categoria").value = "";
  document.querySelector("#nombreProducto").value = "";
  document.querySelector("#precio").value = "";
  document.querySelector("#descripcion").value = "";

  agregarProducto(categoria, imagen, nombre, precio, descripcion)
    .then((respuesta) => {
      alert("Registro Exitoso");
    })
    .catch((respuesta) => {
      alert("Hubo un Eror");
    });
});
