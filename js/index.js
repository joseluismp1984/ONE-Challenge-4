/*--------------------------------------------------*/
//CONEXION AL BACKEND Y CONSULTA DE LOS PRODUCTOS
const listaProductos = () => {
  return fetch("http://localhost:3000/productos").then((respuesta) => {
    return respuesta.json();
  });
};
/*--------------------------------------------------*/
// CREAMOS LA FICHA DE CADA PRODUCTO CON ESTA FUNCIÓN.
const nuevoProducto = (imagen, nombre, precio) => {
  const div = document.createElement("div");
  div.classList.add("producto");

  const contenidoProducto = `<img src="${imagen}" alt="Imagen del   producto" />
  <h2>${nombre}</h2>
  <p>${precio}</p>
  <a href="./informacion.html">Ver producto</a>`;

  div.innerHTML = contenidoProducto;

  return div;
};
/*--------------------------------------------------*/
// CREAMOS ENCABEZADO DE CADA CATEGORIA EN ESTA FUNCIÓN.
const nombreCategoria = (categoria) => {
  const div = document.createElement("div");
  div.classList.add("nombre-categoria");

  const contenidoCategoria = `<h2 id="titulo-categoria" class="titulo-categoria">${categoria}</h2>
  <a id="btn-ver-todo" class="btn-ver-todo" href="./productos.html">Ver todo
  <img src="./img/icono-flecha-categoria.svg"
  alt="Icono flecha de categorias"/>
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
const contenedorPrincipal = document.querySelector(
  "[data-contenedorPrincipal]"
);

const render = async () => {
  try {
    const categorias = ["Star Wars", "Consolas", "Diversos"];
    const productos = await listaProductos();

    categorias.forEach((categoria) => {
      const divCategorias = nuevoContenedor();

      const divGaleria = document.createElement("div");
      divGaleria.classList.add("galeria-categoria");

      productos.forEach((producto) => {
        if (producto.categoria === categoria) {
          divGaleria.appendChild(
            nuevoProducto(producto.imagen, producto.nombre, producto.precio)
          );
        }
      });

      divCategorias.appendChild(nombreCategoria(categoria));
      divCategorias.appendChild(divGaleria);
      contenedorPrincipal.appendChild(divCategorias);
    });
  } catch (erro) {
    alert("Hubo un Error");
  }
};
render();
