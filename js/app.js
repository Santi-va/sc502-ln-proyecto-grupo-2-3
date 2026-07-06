// ==========================================
// PARKEATE
// Proyecto SC-502
// ==========================================

// ==========================
// DATOS
// ==========================

const parqueos = [

    {
        id: 1,
        nombre: "Parqueo Central",
        provincia: "San José",
        zona: "Escazú",
        ubicacion: "San José",
        precio: 1500,
        espacios: 18,
        calificacion: 4.9,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
    },

    {
        id: 2,
        nombre: "City Parking",
        provincia: "Heredia",
        zona: "Belén",
        ubicacion: "Heredia",
        precio: 1200,
        espacios: 0,
        calificacion: 4.7,
        disponible: false,
        imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
    },

    {
        nombre: "Parking Plaza",
        provincia: "Alajuela",
        zona: "Centro",
        ubicacion: "Alajuela",
        precio: 1000,
        espacios: 8,
        calificacion: 4.8,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800"

    },

    {
        id: 4,
        nombre: "Safe Parking",
        provincia: "Cartago",
        zona: "Centro",
        ubicacion: "Cartago",
        precio: 1800,
        espacios: 5,
        calificacion: 5.0,
        disponible: true,
        imagen: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
    }

];


// ==========================
// FUNCIONES AUXILIARES
// ==========================

function generarEstrellas(calificacion) {

    let estrellas = "";

    for(let i = 1; i <= 5; i++){

        if(i <= Math.round(calificacion)){

            estrellas += `<i class="bi bi-star-fill text-warning"></i>`;

        }else{

            estrellas += `<i class="bi bi-star text-warning"></i>`;

        }

    }

    return estrellas;

}


function generarBadge(disponible){

    return disponible

        ? `<span class="badge bg-success">Disponible</span>`

        : `<span class="badge bg-danger">Completo</span>`;

}
// ==========================
// RENDER DE PARQUEOS
// ==========================

function renderParqueos() {

    const contenedor = document.getElementById("contenedor-parqueos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    parqueos.forEach(parqueo => {

        contenedor.innerHTML += `

        <div class="col-lg-3 col-md-6">

            <div class="card h-100 shadow-sm border-0 tarjeta-parqueo">

                <img
                    src="${parqueo.imagen}"
                    class="card-img-top"
                    alt="${parqueo.nombre}"
                >

                <div class="card-body">

                    <div class="d-flex justify-content-between mb-2">

                        ${generarBadge(parqueo.disponible)}

                        <i
                            class="bi bi-heart fs-4 text-secondary favorito"
                            data-id="${parqueo.id}">
                        </i>

                    </div>

                    <h5 class="fw-bold">

                        ${parqueo.nombre}

                    </h5>

                    <p class="text-muted mb-2">

                        <i class="bi bi-geo-alt-fill"></i>

                        ${parqueo.ubicacion}

                    </p>

                    <div class="mb-2">

                        ${generarEstrellas(parqueo.calificacion)}

                        <span class="ms-2">

                            ${parqueo.calificacion}

                        </span>

                    </div>

                    <p>

                        🚗 ${parqueo.espacios} espacios

                    </p>

                    <h4 class="text-primary">

                        ₡${parqueo.precio}/h

                    </h4>

                </div>

                <div class="card-footer bg-white border-0">

                    <button class="btn btn-primary w-100">

                        Reservar

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}
// ==========================
// INICIALIZACIÓN
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    renderParqueos();

    activarFavoritos();

    activarBotonesReserva();

    animarContadores();

    efectoNavbar();

    activarBuscador();

    activarBusquedaRapida();

});
// ==========================
// FAVORITOS
// ==========================

function activarFavoritos() {

    const favoritos = document.querySelectorAll(".favorito");

    favoritos.forEach(favorito => {

        favorito.addEventListener("click", () => {

            favorito.classList.toggle("bi-heart");
            favorito.classList.toggle("bi-heart-fill");

            favorito.classList.toggle("text-secondary");
            favorito.classList.toggle("text-danger");

        });

    });

}
// ==========================
// CONTADORES
// ==========================

function animarContadores() {

    const contadores = document.querySelectorAll(".contador");

    contadores.forEach(contador => {

        const objetivo = Number(contador.dataset.valor);

        let actual = 0;

        const incremento = Math.ceil(objetivo / 100);

        const intervalo = setInterval(() => {

            actual += incremento;

            if (actual >= objetivo) {

                contador.textContent = objetivo;

                clearInterval(intervalo);

            } else {

                contador.textContent = actual;

            }

        }, 20);

    });

}
// ==========================
// NAVBAR
// ==========================

function efectoNavbar() {

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("shadow");

        } else {

            navbar.classList.remove("shadow");

        }

    });

}
// ==========================
// EVENTOS
// ==========================

function activarBotonesReserva() {

    const botones = document.querySelectorAll(".btn-primary");

    botones.forEach(boton => {

        boton.addEventListener("click", () => {

            alert("La funcionalidad de reservas estará disponible en el siguiente avance.");

        });

    });

}
// ==========================
// BUSCADOR
// ==========================

function renderBusqueda(lista) {

    const contenedor = document.getElementById("contenedor-busqueda");

    if (!contenedor) return;

    const cantidad = document.getElementById("cantidadResultados");

    contenedor.innerHTML = "";

    if (lista.length === 0) {

        contenedor.innerHTML = `
            <div class="col-12 text-center py-5">

                <i class="bi bi-search fs-1 text-muted"></i>

                <h4 class="mt-3">

                    No se encontraron parqueos.

                </h4>

                <p class="text-muted">

                    Intenta con otros filtros.

                </p>

            </div>
        `;

        if (cantidad) {

            cantidad.textContent = "Se encontraron 0 parqueos.";

        }

        return;

    }

    if (cantidad) {

        cantidad.textContent = `Se encontraron ${lista.length} parqueo(s).`;

    }

    lista.forEach(parqueo => {

        contenedor.innerHTML += `

        <div class="col-lg-3 col-md-6">

            <div class="card h-100 shadow-sm border-0 tarjeta-parqueo">

                <img
                    src="${parqueo.imagen}"
                    class="card-img-top"
                    alt="${parqueo.nombre}">

                <div class="card-body">

                    <div class="d-flex justify-content-between mb-2">

                        ${generarBadge(parqueo.disponible)}

                        <i
                            class="bi bi-heart fs-4 text-secondary favorito"
                            data-id="${parqueo.id}">
                        </i>

                    </div>

                    <h5 class="fw-bold">

                        ${parqueo.nombre}

                    </h5>

                    <p class="text-muted mb-2">

                        <i class="bi bi-geo-alt-fill"></i>

                        ${parqueo.ubicacion}

                    </p>

                    <div class="mb-2">

                        ${generarEstrellas(parqueo.calificacion)}

                        <span class="ms-2">

                            ${parqueo.calificacion}

                        </span>

                    </div>

                    <p>

                        🚗 ${parqueo.espacios} espacios

                    </p>

                    <h4 class="text-primary">

                        ₡${parqueo.precio}/h

                    </h4>

                </div>

                <div class="card-footer bg-white border-0">

                    <button class="btn btn-primary w-100">

                        Reservar

                    </button>

                </div>

            </div>

        </div>

        `;

    });

    activarFavoritos();

}
function activarBuscador() {

    const boton = document.getElementById("btnBuscar");

    if (!boton) return;

    renderBusqueda(parqueos);

    boton.addEventListener("click", () => {

        const provincia = document
            .getElementById("filtroProvincia")
            .value
            .trim()
            .toLowerCase();

        const zona = document
            .getElementById("filtroZona")
            .value
            .trim()
            .toLowerCase();

        const nombre = document
            .getElementById("filtroNombre")
            .value
            .trim()
            .toLowerCase();

        const resultados = parqueos.filter(parqueo => {

            const coincideProvincia =
                provincia === "" ||
                parqueo.provincia.toLowerCase() === provincia;

            const coincideZona =
                parqueo.zona.toLowerCase().includes(zona);

            const coincideNombre =
                parqueo.nombre.toLowerCase().includes(nombre);

            return coincideProvincia &&
                   coincideZona &&
                   coincideNombre;

        });

        renderBusqueda(resultados);

    });

}
// ==========================
// BÚSQUEDA RÁPIDA (HOME)
// ==========================

function activarBusquedaRapida() {

    const boton = document.getElementById("btnHeroBuscar");

    if (!boton) return;

    boton.addEventListener("click", () => {

        const ubicacion = document.getElementById("ubicacion");
        const fecha = document.getElementById("fecha");
        const vehiculo = document.getElementById("vehiculo");

        if (
            !ubicacion.value.trim() ||
            !fecha.value ||
            !vehiculo.value
        ) {

            alert("Por favor complete la ubicación, la fecha y el tipo de vehículo.");

            return;

        }

        alert(
            "En el siguiente avance se consultará la disponibilidad de parqueos según la ubicación, la fecha y el tipo de vehículo seleccionados."
        );

    });

}