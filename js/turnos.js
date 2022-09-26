const MAX_TURNOS = 5;
const TIEMPO_TURNO = 15;

const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());

const servicioRequerido = JSON.parse(localStorage.getItem(params.id));

const nombreServicio = document.getElementById("nombre_servicio");
nombreServicio.innerText = servicioRequerido.nombre;


console.log(servicioRequerido.turnos.length);
console.log(servicioRequerido.turnos);


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
    console.log("aca estoy");

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




    // function anularTurno() {

    //     nombrePaciente = recibirNombre("Ingrese el nombre del paciente");
    //     nombreCliente = recibirNombre("Ingrese el nombre del cliente");

    //     const turnosTotales = [...turnosElvira, ...turnosCintya, ...turnosEduardo, ...turnosAlejandra, ...turnosDaniel, ...turnosLeonardo, ...turnosPatricia, ...turnosSilvina, ...turnosSusana];
    //     const turnosReservados = turnosTotales.filter(unTurno => unTurno.nombrePaciente === nombrePaciente && unTurno.nombreCliente === nombreCliente);

    //     const serviciosTotales = turnosReservados.map(unTurno => `${ unTurno.servicio } `);
    //     const serviciosNoRepetidos = [...new Set(serviciosTotales)];

    //     let mensaje = "";
    //     serviciosNoRepetidos.forEach((servicio, index) => {
    //         mensaje += `${ index + 1 } - ${ servicio } \n`;
    //     })
    //     reservaAnulada = prompt("Ingrese el ITEM a Anular", mensaje);
    //     alert(reservaAnulada);
    //     alert(serviciosNoRepetidos);
    //     const reservaBajada = (reservaAnulada - 1);
    //     alert(reservaBajada);
    //     const servicioAnulado = (serviciosNoRepetidos[reservaBajada]);
    //     alert(servicioAnulado);

    //     if (servicioAnulado === "Clínica general") {
    //         alert("estoy bien");
    //         alert(turnosElvira);

    //         const turnosElvira = turnosElvira.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente === nombrePaciente && turnoNoAnulado.nombreCliente === nombreCliente);
    //     } else
    //         alert("no es este");


    // }

