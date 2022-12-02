/*--------------------------------------------------*/
//CONEXION AL BACKEND Y CONSULTA DE LOS PRODUCTOS
const todosProductos = () => {
  return fetch("http://localhost:3000/productos").then((respuesta) => {
    return respuesta.json();
  });
};
/*--------------------------------------------------*/
// CREAMOS LA FICHA DE CADA PRODUCTO CON ESTA FUNCIÓN.
const nuevoProducto = (imagen, nombre, precio, codigo) => {
  const div = document.createElement("div");
  div.classList.add("producto");

  const contenidoProducto = `<img
                  class="icono-eliminar"
                  src="./img/icono-papelera.svg"
                  alt=""
                />
                <img class="icono-editar" src="./img/icono-editar.svg" alt="" />
                <img
                  class="producto-img"
                  src="${imagen}"
                  alt="Imagen del producto"
                />
                <h2>${nombre}</h2>
                <p>${precio}</p>
                <span>${codigo}</span>`;

  div.innerHTML = contenidoProducto;

  return div;
};
/*--------------------------------------------------*/
// CREAMOS ENCABEZADO DE CADA CATEGORIA EN ESTA FUNCIÓN.
const nombreCategoria = () => {
  const div = document.createElement("div");
  div.classList.add("nombre-categoria");

  const contenidoCategoria = `<h2 id="titulo-categoria" class="titulo-categoria">
                Todos los productos
              </h2>
              <a
                id="btn-agregar-prod"
                class="btn-agregar-prod"
                href="./agregar.html"
              >
                Agregar producto
              </a>`;

  div.innerHTML = contenidoCategoria;

  return div;
};
/*-----------------------------------------------------*/
const nuevoContenedor = () => {
  const divCategorias = document.createElement("div");
  divCategorias.classList.add("categorias");

  return divCategorias;
};
/*#####################################################*/
// Renderizar todo el contenido
const contenedorProductos = document.querySelector(
  "[data-contenedorProductos]"
);

const render = async () => {
  try {
    const productos = await todosProductos();

    const divCategorias = nuevoContenedor();

    const divGaleria = document.createElement("div");
    divGaleria.classList.add("galeria-categoria");

    productos.forEach((producto) => {
      divGaleria.appendChild(
        nuevoProducto(
          producto.imagen,
          producto.nombre,
          producto.precio,
          producto.codigo
        )
      );
    });

    divCategorias.appendChild(nombreCategoria());
    divCategorias.appendChild(divGaleria);
    contenedorProductos.appendChild(divCategorias);
  } catch (erro) {
    alert("Hubo un Error");
  }
};
render();
