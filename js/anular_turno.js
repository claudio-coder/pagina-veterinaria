function queAnular(turnoaAnular, keyServicio) {
    const servicioAnulado = JSON.parse(localStorage.getItem(keyServicio));
    servicioAnulado.turnos.splice(turnoaAnular, 1)

    localStorage.setItem(servicioAnulado.id, JSON.stringify(servicioAnulado));

    const nombrePaciente = document.getElementById("nombrePaciente");
    const nombreCliente = document.getElementById("nombreCliente");

    anularTurno(nombrePaciente, nombreCliente);
}

let formulario = document.getElementById("boton_seguir");
formulario.addEventListener("click", (e) => {
    e.preventDefault();
    const nombrePaciente = document.getElementById("nombrePaciente");
    const nombreCliente = document.getElementById("nombreCliente");


    if (nombreCliente.value !== "" && nombrePaciente.value !== "") {
        anularTurno(nombrePaciente, nombreCliente);
    }
});


function anularTurno(nombrePaciente, nombreCliente) {
    let reservasAnular = "";

    const anularServicio = document.getElementById("anularservicio");
    anularServicio.classList.add("d-none");
    const anularPlaca = document.getElementById("anulacion");
    anularPlaca.classList.remove("d-none");


    const anularReserva = document.getElementById("anular_reserva");


    for (let i = 1; i < 9; i++) {
        const servicioAnulado = JSON.parse(localStorage.getItem(i));
        turnosParaAnular = servicioAnulado.turnos;
        nombreAnular = servicioAnulado.nombre;

        for (let index = 0; index < turnosParaAnular.length; index++) {
            if (turnosParaAnular[index].nombrePaciente === nombrePaciente.value && turnosParaAnular[index].nombreCliente === nombreCliente.value) {

                reservasAnular = reservasAnular.concat(`<div class="row d-flex align-items-center"><div class="col text-center m-2"><h4>`)
                    .concat(nombreAnular)
                    .concat(`<h4></div>`)
                    .concat(`<div class="col text-center" ><h4>`)
                    .concat(index + 1)
                    .concat(`<h4></div>`)
                    .concat(`<div class= "col text-center"><input type="button" button onclick="queAnular(`)
                    .concat(index)
                    .concat(`,`)
                    .concat(i)
                    .concat(`)" class="button_turno" value="Anular" ></div></div>`)
            }
        }
    }

    anularReserva.innerHTML = reservasAnular;
    if (reservasAnular === "") {
        Swal.fire({
            icon: 'error',
            text: 'No tiene turnos reservados',
            footer: '<a href="../pages/reserva.html">Volver</a>',
        }).then(() => {
            window.location.href = `../pages/reserva.html`;
        })

    }
}




