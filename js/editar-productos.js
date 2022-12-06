const traerProducto = (id) => {
  return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) => {
    return respuesta.json();
  });
};
/*----------------------------------------------------------------------------------*/
let codigo;

const obtenerProducto = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    alert("Hubo Un Error");
  }

  const categoria = document.querySelector("#categoria");
  const imagen = document.querySelector("#imgBase64");
  const nombre = document.querySelector("#nombreProducto");
  const precio = document.querySelector("#precio");
  const descripcion = document.querySelector("#descripcion");

  traerProducto(id).then((producto) => {
    categoria.value = producto.categoria;
    imagen.value = producto.imagen;
    nombre.value = producto.nombre;
    precio.value = producto.precio;
    codigo = producto.codigo;
    descripcion.value = producto.descripcion;
  });
};
obtenerProducto();
/*----------------------------------------------------------------------------------*/

const actualizarProducto = (
  categoria,
  imagen,
  nombre,
  precio,
  codigo,
  descripcion,
  id
) => {
  return fetch(`http://localhost:3000/productos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      categoria,
      imagen,
      nombre,
      precio,
      codigo,
      descripcion,
    }),
  })
    .then((respuesta) => {
      return respuesta.json();
    })
    .catch((err) => {
      console.log("Hubo un Erorr", err);
    });
};

const formularioEditar = document.querySelector("[data-editarProducto]");

formularioEditar.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    alert("Hubo Un Error");
  }

  const categoria = document.querySelector("#categoria").value;
  const imagen = document.querySelector("#imgBase64").value;
  const nombre = document.querySelector("#nombreProducto").value;
  const precio = document.querySelector("#precio").value;
  const descripcion = document.querySelector("#descripcion").value;

  actualizarProducto(
    categoria,
    imagen,
    nombre,
    precio,
    codigo,
    descripcion,
    id
  ).then((respuesta) => {
    console.log("Edición de Producto - Exitoso");
    window.location.href = "./productos.html";
  });
});
