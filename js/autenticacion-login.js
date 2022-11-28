const email = document.querySelector("#login-email");
const contrasena = document.querySelector("#password");
const botonEntrar = document.querySelector("#login-enviar");

/*##########################################*/

botonEntrar.addEventListener("click", (evento) => {
  evento.preventDefault();
  let autenticado = false;

  const listaUsuarios = () => {
    return fetch("http://localhost:3000/usuarios").then((respuesta) => {
      return respuesta.json();
    });
  };

  listaUsuarios()
    .then((respuesta) => {
      respuesta.forEach((usuario) => {
        if (
          email.value === usuario.correo &&
          contrasena.value === usuario.contrasena &&
          usuario.rol === "administrador"
        ) {
          autenticado = true;
        }
      });

      if (autenticado === true) {
        console.log("Usuario Existente");
        location.replace("./productos.html");
      } else {
        alert("Usuario No Existe");
      }
    })
    .catch((respuesta) => alert("Ocurrio un Error"));
});

/*##########################################*/
