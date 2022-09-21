const SERVICIOS = [
    { id: "1", nombre: "Clinica General", turnos: [], profesionales: ["Dra Elvira"] },
    { id: "2", nombre: "Medicina Holistica", turnos: [], profesionales: ["Dra Patricia"] },
    { id: "3", nombre: "Metodo de Diagnostico", turnos: [], profesionales: ["Dra Cintya"] },
    { id: "4", nombre: "Electro/Ecografias", turnos: [], profesionales: ["Dr Daniel"] },
    { id: "5", nombre: "Oncología", turnos: [], profesionales: ["Dra Alejandra"] },
    { id: "6", nombre: "Exóticos", turnos: [], profesionales: ["Dr Leonardo"] },
    { id: "7", nombre: "Fisioterapia", turnos: [], profesionales: ["Dra Patricia"] },
    { id: "8", nombre: "Baños y Peluquería", turnos: [], profesionales: ["Sra Susana"] },

]

SERVICIOS.forEach(unServicio => {
    if (localStorage.getItem(unServicio.id) === null) {
        localStorage.setItem(unServicio.id, JSON.stringify(unServicio));
    }
});

// if (localStorage.getItem("servicios") === null) {
//     localStorage.setItem("servicios", JSON.stringify(SERVICIOS));

// }


class Reservas {
    constructor(id) {
        this.lasReservas = document.getElementById(id);
        this.showReservas();
    }
    showReservas() {
        this.lasReservas.innerHTML = this.getReservas();

    }

    getReservas() {
        let reservas = "";



        SERVICIOS.forEach(unServicio => {
            reservas = reservas.concat(`<div class="cardreservas"><a href="../pages/turnos_profesionales.html?id=`)
                .concat(unServicio.id)
                .concat(`" class="button__reserva"> `)
                .concat(unServicio.nombre)
                .concat(`</a>`)
                .concat("</div>")

        });

        return reservas;


    }

}