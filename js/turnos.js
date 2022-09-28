const MAX_TURNOS = 5;
const TIEMPO_TURNO = 15;

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const servicioRequerido = JSON.parse(localStorage.getItem(params.id));

const nombreServicio = document.getElementById("nombre_servicio");
nombreServicio.innerText = servicioRequerido.nombre;


let formulario = document.getElementById("boton_seguir");
formulario.addEventListener("click", (e) => {
    e.preventDefault();
    const nombrePaciente = document.getElementById("nombrePaciente");
    const nombreCliente = document.getElementById("nombreCliente");


    if (nombreCliente.value !== "" && nombrePaciente.value !== "") {
        comenzarDiaLaboral(nombrePaciente.value, nombreCliente.value);
    }

});



function comenzarDiaLaboral(nombrePaciente, nombreCliente) {

    turno = { nombrePaciente, nombreCliente };

    const cualServicio = document.getElementById("cualservicio");
    cualServicio.classList.add("d-none");
    const profesionalReserva = document.getElementById("profesional_reserva");
    profesionalReserva.classList.remove("d-none");


    const nombreProfesional = document.getElementById("profesional_nombre");
    nombreProfesional.innerText = `${nombreProfesional.innerText} ${servicioRequerido.profesionales}`;
    const profesionalTurno = document.getElementById("profesional_turno");
    profesionalTurno.innerText = `${profesionalTurno.innerText} ${servicioRequerido.turnos.length}`;
    const nombreMascota = document.getElementById("nombre_mascota");
    nombreMascota.innerText = `${nombreMascota.innerText} ${nombrePaciente}`;
    const nombrePropietario = document.getElementById("nombre_propietario");
    nombrePropietario.innerText = `${nombrePropietario.innerText} ${nombreCliente}`;
}

let aceptoTurno = document.getElementById("boton_aceptar");
aceptoTurno.addEventListener("click", (e) => {
    e.preventDefault();

    servicioRequerido.turnos.push(turno);

    localStorage.setItem(servicioRequerido.id, JSON.stringify(servicioRequerido))

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon: 'success',
        title: 'Se guardo el turno'
    })

    setTimeout(function () {
        window.location.href = `./reserva.html`;
    }, 3500);

})


