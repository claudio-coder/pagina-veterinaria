
fetch("../data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(unServicio => {
            if (localStorage.getItem(unServicio.id) === null) {
                localStorage.setItem(unServicio.id, JSON.stringify(unServicio));
            }
        });
    })

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

        let servicios = [];
        for (let i = 1; i <= 8; i++) {
            servicios.push(JSON.parse(localStorage.getItem(i)));
        }

        servicios.forEach(unServicio => {
            reservas = reservas.concat(`<div class="cardreservas"><a href="../pages/turnos_profesionales.html?id=`)
                .concat(unServicio.id)
                .concat(`" class="button__reserva"> `)
                .concat(unServicio.nombre)
                .concat(`</a>`)
                .concat("</div>")

        });

        return reservas;


    }

};

