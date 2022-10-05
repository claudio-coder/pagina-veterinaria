
let formulario = document.getElementById("boton_seguir");
formulario.addEventListener("click", (e) => {
    e.preventDefault();
    const nombrePaciente = document.getElementById("nombrePaciente");
    const nombreCliente = document.getElementById("nombreCliente");


    if (nombreCliente.value !== "" && nombrePaciente.value !== "") {
        anularTurno(nombrePaciente.value, nombreCliente.value);

    }

});


function anularTurno() {
    let params = 6;
    // localStorage.getItem(servicioRequerido.id, JSON.stringify(servicioRequerido))
    const servicioAnulado = JSON.parse(localStorage.getItem(params));
    // const turnoAnulado = servicioAnulado.



    // console.log(servicioAnulado);


    console.log(servicioAnulado);

    turnoparaAnular = servicioAnulado.turnos;

    console.log(turnoparaAnular);
    console.log(turnoparaAnular.length);
    console.log(turnoparaAnular[0]);
    console.log(turnoparaAnular[1]);
    console.log(turnoparaAnular[2]);
    console.log(nombreCliente.value);
    console.log(nombrePaciente.value);

    console.log(turnoparaAnular[0].nombreCliente);
    console.log(turnoparaAnular[0].nombrePaciente);

    if (turnoparaAnular[0].nombreCliente === nombreCliente.value && turnoparaAnular[0].nombrePaciente === nombrePaciente.value) {
        console.log("estoy accaaaaaaa");
    }
    console.log("que pasoooooo");

    // turnoAnulado = turnoparaAnular.filter(turnoparaAnular => turnoparaAnular.nombrePaciente === nombrePaciente && turnoparaAnular.nombreCliente === nombreCliente);

    // console.log(turnoAnulado);


    // turnoAnulado = servicioAnulado.turnos;
    // console.log(turnoAnulado);


    // const turnosTotales = [...turnosElvira, ...turnosCintya, ...turnosEduardo, ...turnosAlejandra, ...turnosDaniel, ...turnosLeonardo, ...turnosPatricia, ...turnosSilvina, ...turnosSusana];
    // const turnosReservados = turnosTotales.filter(unTurno => unTurno.nombrePaciente === nombrePaciente && unTurno.nombreCliente === nombreCliente);

    const serviciosTotales = turnosReservados.map(unTurno => `${unTurno.servicio} `);
    const serviciosNoRepetidos = [...new Set(serviciosTotales)];

    let mensaje = "";
    serviciosNoRepetidos.forEach((servicio, index) => {
        mensaje += `${index + 1} - ${servicio} \n`;
    })
    reservaAnulada = prompt("Ingrese el ITEM a Anular", mensaje);
    alert(reservaAnulada);
    alert(serviciosNoRepetidos);
    const reservaBajada = (reservaAnulada - 1);
    alert(reservaBajada);
    // const servicioAnulado = (serviciosNoRepetidos[reservaBajada]);
    alert(servicioAnulado);

    if (servicioAnulado === "Clínica general") {
        alert("estoy bien");
        alert(turnosElvira);

        const turnosElvira = turnosElvira.filter(turnoNoAnulado => turnoNoAnulado.nombrePaciente === nombrePaciente && turnoNoAnulado.nombreCliente === nombreCliente);
    } else
        alert("no es este");


}

