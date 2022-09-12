const SERVICIOS = [{
    id: 1,
    nombre: "Clinica General",
},
{
    id: 2,
    nombre: "Medicina Holistica",
},
{
    id: 3,
    nombre: "Metodo de Diagnostico",
},
{
    id: 4,
    nombre: "Electrocardiogramas",
},
{
    id: 5,
    nombre: "Oncología",
},
{
    id: 6,
    nombre: "Exóticos",
},
{
    id: 7,
    nombre: "Fisioterapia",
},
{
    id: 8,
    nombre: "Ecografias",
},
{
    id: 9,
    nombre: "Farmacia",
},
{
    id: 10,
    nombre: "Baños y Peluquería",
},

]


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
            reservas = reservas.concat(`<div class="cardreservas"><button class="button__reserva"> `)
                .concat(unServicio.nombre)
                .concat(`</button>`).concat("</div>")
        });
        console.log(reservas);
        return reservas;



    }

}