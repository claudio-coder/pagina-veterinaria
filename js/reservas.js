const SERVICIOS = [
    { id: "1", nombre: "Clinica General", turnos: [], profesionales: ["Elvira"] },
    { id: "2", nombre: "Medicina Holistica", turnos: [], profesionales: ["Patricia"] },
    { id: "3", nombre: "Metodo de Diagnostico", turnos: [], profesionales: ["Cintya"] },
    { id: "4", nombre: "Electro/Ecografias", turnos: [], profesionales: ["Daniel"] },
    { id: "5", nombre: "Oncología", turnos: [], profesionales: ["Alejandra"] },
    { id: "6", nombre: "Exóticos", turnos: [], profesionales: ["Leonardo"] },
    { id: "7", nombre: "Fisioterapia", turnos: [], profesionales: ["Patricia"] },
    { id: "8", nombre: "Baños y Peluquería", turnos: [], profesionales: ["Susana"] },

]

if (localStorage.getItem("servicios") === null) {
    localStorage.setItem("servicios", JSON.stringify(SERVICIOS));

}




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
            reservas = reservas.concat(`<div class="cardreservas"><a href="../pages/turnos.html?id=`)
                .concat(unServicio.id)
                .concat(`" class="button__reserva"> `)
                .concat(unServicio.nombre)
                .concat(`</a>`)
                .concat("</div>")

        });

        return reservas;


    }

}