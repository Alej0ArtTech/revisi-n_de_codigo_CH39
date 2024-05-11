
// query selector debe ir con . porque es clase. O usarla sin selector.
var formulario = document.querySelector(".formulario");

formulario.onsubmit = function(e) {
  e.preventDefault();

  var nombreInput = formulario.elements.nombre;
  var edadInput = formulario.elements.edad;
  var nacionalidadInput = formulario.elements.nationality;

  var nombre = nombreInput.value;
  var edad = parseInt(edadInput.value);
  var nacionalidad = nacionalidadInput.value;

  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreInput.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    edadInput.classList.add("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");

  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  function crearElemento(descripcion, valor) {
    var span = document.createElement("span");
    var input = document.createElement("input");
    var br = document.createElement("br");
    span.textContent = descripcion + ": ";
    input.value = valor;
    elementoLista.appendChild(span);
    elementoLista.appendChild(input);
    elementoLista.appendChild(br);
  }

  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar");
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    elementoLista.remove();
  };
}

var botonBorrarGlobal = document.createElement("button");
botonBorrarGlobal.textContent = "Eliminar invitado";
botonBorrarGlobal.id = "boton-borrar-global";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrarGlobal);