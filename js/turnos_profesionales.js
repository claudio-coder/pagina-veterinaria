const MAX_TURNOS = 5;

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

// const serviciosPedido = JSON.parse(localStorage.getItem("servicios"));
// const servicioRequerido = serviciosPedido.find(unServicio => unServicio.id.toString() === params.id);
const servicioRequerido = JSON.parse(localStorage.getItem(params.id));

const nombreServicio = document.getElementById("nombre_servicio");
nombreServicio.innerText = servicioRequerido.nombre;

const nombreProfesional = document.getElementById("nombre_profesional");
nombreProfesional.innerText = servicioRequerido.profesionales;

const selecciono = document.getElementById("boton_seleccionar");
if (servicioRequerido.turnos.length < MAX_TURNOS) {
    selecciono.href = `../pages/turnos.html?id=${servicioRequerido.id}`;
} else {
    Swal.fire({
        icon: 'error',
        // title: 'Oops...',
        text: 'Se terminaron los turnos',
        footer: '<a href="../pages/reserva.html">Volver</a>'
    })
    selecciono.href = `../pages/reserva.html`;
}


