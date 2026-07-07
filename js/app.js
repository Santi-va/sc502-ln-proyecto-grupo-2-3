// ==========================================
// PARKEATE
// Proyecto SC-502
// app.js
// ==========================================

// ==========================
// DATOS
// ==========================

const parqueos = [

    {
        id:1,
        nombre:"Parqueo Central",
        provincia:"San José",
        zona:"Escazú",
        ubicacion:"Escazú Centro",
        precio:1500,
        espacios:18,
        calificacion:4.9,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800"
    },

    {
        id:2,
        nombre:"City Parking",
        provincia:"Heredia",
        zona:"Belén",
        ubicacion:"Belén",
        precio:1200,
        espacios:0,
        calificacion:4.7,
        disponible:false,
        imagen:"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800"
    },

    {
        id:3,
        nombre:"Parking Plaza",
        provincia:"Alajuela",
        zona:"Centro",
        ubicacion:"Alajuela Centro",
        precio:1000,
        espacios:8,
        calificacion:4.8,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800"
    },

    {
        id:4,
        nombre:"Safe Parking",
        provincia:"Cartago",
        zona:"Centro",
        ubicacion:"Cartago Centro",
        precio:1800,
        espacios:5,
        calificacion:5.0,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800"
    },

    {
        id:5,
        nombre:"Pacific Parking",
        provincia:"Puntarenas",
        zona:"Puntarenas",
        ubicacion:"Paseo de los Turistas",
        precio:1400,
        espacios:14,
        calificacion:4.6,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1494526585095-c41746248156?w=800"
    },

    {
        id:6,
        nombre:"Limon Parking",
        provincia:"Limón",
        zona:"Centro",
        ubicacion:"Puerto Limón",
        precio:1100,
        espacios:9,
        calificacion:4.5,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800"
    },

    {
        id:7,
        nombre:"Liberia Park",
        provincia:"Guanacaste",
        zona:"Liberia",
        ubicacion:"Liberia Centro",
        precio:1300,
        espacios:12,
        calificacion:4.7,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800"
    },

    {
        id:8,
        nombre:"Atenas Parking",
        provincia:"Alajuela",
        zona:"Atenas",
        ubicacion:"Atenas Centro",
        precio:900,
        espacios:21,
        calificacion:4.8,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
    },

    {
        id:9,
        nombre:"Airport Parking",
        provincia:"Alajuela",
        zona:"Río Segundo",
        ubicacion:"Aeropuerto Juan Santamaría",
        precio:2500,
        espacios:30,
        calificacion:5.0,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800"
    },

    {
        id:10,
        nombre:"Mall Parking",
        provincia:"San José",
        zona:"Curridabat",
        ubicacion:"Multiplaza Curridabat",
        precio:1700,
        espacios:11,
        calificacion:4.9,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
    },

    {
        id:11,
        nombre:"Premium Parking",
        provincia:"Heredia",
        zona:"San Pablo",
        ubicacion:"San Pablo",
        precio:2000,
        espacios:4,
        calificacion:5.0,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800"
    },

    {
        id:12,
        nombre:"Eco Parking",
        provincia:"Cartago",
        zona:"Paraíso",
        ubicacion:"Paraíso",
        precio:950,
        espacios:16,
        calificacion:4.6,
        disponible:true,
        imagen:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800"
    }

];
// ==========================
// FUNCIONES AUXILIARES
// ==========================

function generarEstrellas(calificacion){

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

function crearTarjetaParqueo(parqueo){

    return `

    <div class="col-lg-3 col-md-6 mb-4">

        <div class="card tarjeta-parqueo h-100">

            <img
                src="${parqueo.imagen}"
                class="card-img-top"
                alt="${parqueo.nombre}">

            <div class="card-body">

                <div class="d-flex justify-content-between align-items-center mb-2">

                    ${generarBadge(parqueo.disponible)}

                    <i
                        class="bi bi-heart favorito fs-4 text-secondary"
                        data-id="${parqueo.id}">
                    </i>

                </div>

                <h5 class="fw-bold">

                    ${parqueo.nombre}

                </h5>

                <p class="text-muted">

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

                    🚗 ${parqueo.espacios} espacios disponibles

                </p>

                <h4 class="precio">

                    ₡${parqueo.precio}/hora

                </h4>

            </div>

            <div class="card-footer bg-white border-0">

                <button
                    class="btn btn-parkeate btn-reservar w-100">

                    <i class="bi bi-calendar-check"></i>

                    Reservar

                </button>

            </div>

        </div>

    </div>

    `;

}
// ==========================
// HOME
// ==========================

function renderParqueos(){

    const contenedor = document.getElementById("contenedor-parqueos");

    if(!contenedor) return;

    contenedor.innerHTML = "";

    parqueos.forEach(parqueo=>{

        contenedor.innerHTML += crearTarjetaParqueo(parqueo);

    });

    activarFavoritos();
    activarBotonesReserva();

}

// ==========================
// FAVORITOS
// ==========================

function activarFavoritos(){

    const favoritos = document.querySelectorAll(".favorito");

    favoritos.forEach(favorito=>{

        const id = favorito.dataset.id;

        if(localStorage.getItem("favorito-"+id)==="true"){

            favorito.classList.remove("bi-heart","text-secondary");

            favorito.classList.add("bi-heart-fill","text-danger");

        }

        favorito.addEventListener("click",()=>{

            favorito.classList.toggle("bi-heart");
            favorito.classList.toggle("bi-heart-fill");

            favorito.classList.toggle("text-secondary");
            favorito.classList.toggle("text-danger");

            const activo = favorito.classList.contains("bi-heart-fill");

            localStorage.setItem("favorito-"+id,activo);

        });

    });

}

// ==========================
// RESERVAS
// ==========================

function activarBotonesReserva(){

    const botones = document.querySelectorAll(".btn-reservar");

    botones.forEach(boton=>{

        boton.addEventListener("click",()=>{

            alert("La funcionalidad de reservas se implementará en el siguiente avance.");

        });

    });

}

// ==========================
// CONTADORES
// ==========================

function animarContadores(){

    const contadores = document.querySelectorAll(".contador");

    if(contadores.length===0) return;

    contadores.forEach(contador=>{

        const objetivo = Number(contador.dataset.valor);

        let actual = 0;

        const incremento = Math.ceil(objetivo/100);

        const intervalo = setInterval(()=>{

            actual += incremento;

            if(actual>=objetivo){

                contador.textContent = objetivo;

                clearInterval(intervalo);

            }else{

                contador.textContent = actual;

            }

        },20);

    });

}

// ==========================
// NAVBAR
// ==========================

function efectoNavbar(){

    const navbar = document.querySelector(".navbar");

    if(!navbar) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY>40){

            navbar.classList.add("shadow");

        }else{

            navbar.classList.remove("shadow");

        }

    });

}
// ==========================
// BUSCADOR
// ==========================

function renderBusqueda(lista){

    const contenedor = document.getElementById("contenedor-busqueda");

    if(!contenedor) return;

    const cantidad = document.getElementById("cantidadResultados");

    contenedor.innerHTML = "";

    if(lista.length===0){

        contenedor.innerHTML = `

            <div class="col-12 text-center py-5">

                <i class="bi bi-search display-3 text-muted"></i>

                <h4 class="mt-3">

                    No se encontraron parqueos

                </h4>

                <p class="text-muted">

                    Intenta realizar una búsqueda diferente.

                </p>

            </div>

        `;

        if(cantidad){

            cantidad.textContent="Se encontraron 0 parqueos.";

        }

        return;

    }

    lista.forEach(parqueo=>{

        contenedor.innerHTML += crearTarjetaParqueo(parqueo);

    });

    if(cantidad){

        cantidad.textContent=`Se encontraron ${lista.length} parqueo(s).`;

    }

    activarFavoritos();

    activarBotonesReserva();

}

// ==========================
// FILTROS
// ==========================

function activarBuscador(){

    const boton=document.getElementById("btnBuscar");

    if(!boton) return;

    renderBusqueda(parqueos);

    boton.addEventListener("click",()=>{

        const provincia=document
            .getElementById("filtroProvincia")
            .value
            .trim()
            .toLowerCase();

        const zona=document
            .getElementById("filtroZona")
            .value
            .trim()
            .toLowerCase();

        const nombre=document
            .getElementById("filtroNombre")
            .value
            .trim()
            .toLowerCase();

        const resultados=parqueos.filter(parqueo=>{

            const coincideProvincia=

                provincia==="" ||

                parqueo.provincia.toLowerCase()===provincia;

            const coincideZona=

                parqueo.zona.toLowerCase().includes(zona);

            const coincideNombre=

                parqueo.nombre.toLowerCase().includes(nombre);

            return coincideProvincia &&
                   coincideZona &&
                   coincideNombre;

        });

        renderBusqueda(resultados);

    });

}

// ==========================
// BÚSQUEDA RÁPIDA
// ==========================

function activarBusquedaRapida(){

    const boton=document.getElementById("btnHeroBuscar");

    if(!boton) return;

    boton.addEventListener("click",()=>{

        const ubicacion=document.getElementById("ubicacion");

        const fecha=document.getElementById("fecha");

        const vehiculo=document.getElementById("vehiculo");

        if(

            !ubicacion.value.trim() ||

            !fecha.value ||

            !vehiculo.value

        ){

            alert("Complete todos los campos antes de continuar.");

            return;

        }

        window.location.href="pages/buscar.html";

    });

}
// ==========================
// LOGIN
// ==========================

function inicializarLogin(){

    const loginForm = document.getElementById("loginForm");

    if(!loginForm) return;

    loginForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const correo = document.getElementById("correo").value.trim();
        const password = document.getElementById("password").value.trim();

        if(!correo || !password){

            alert("Debe completar todos los campos.");

            return;

        }

        alert("Inicio de sesión exitoso.");

        window.location.href = "perfil.html";

    });

}

// ==========================
// REGISTRO
// ==========================

function inicializarRegistro(){

    const registroForm = document.getElementById("registroForm");

    if(!registroForm) return;

    registroForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();
        const correo = document.getElementById("correoRegistro").value.trim();
        const telefono = document.getElementById("telefono").value.trim();
        const password = document.getElementById("passwordRegistro").value;
        const confirmar = document.getElementById("confirmarPassword").value;

        if(!nombre || !correo || !telefono || !password || !confirmar){

            alert("Todos los campos son obligatorios.");

            return;

        }

        if(password.length < 8){

            alert("La contraseña debe tener al menos 8 caracteres.");

            return;

        }

        if(password !== confirmar){

            alert("Las contraseñas no coinciden.");

            return;

        }

        alert("Usuario registrado correctamente.");

        window.location.href = "login.html";

    });

}

// ==========================
// RECUPERAR CONTRASEÑA
// ==========================

function inicializarRecuperacion(){

    const recuperarForm = document.getElementById("recuperarForm");

    if(!recuperarForm) return;

    recuperarForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const correo = document.getElementById("correoRecuperacion").value.trim();

        if(!correo){

            alert("Ingrese un correo electrónico.");

            return;

        }

        document
            .getElementById("mensajeRecuperacion")
            .classList.remove("d-none");

        recuperarForm.reset();

    });

}

// ==========================
// PERFIL
// ==========================

function inicializarPerfil(){

    const perfilForm = document.getElementById("perfilForm");

    if(!perfilForm) return;

    perfilForm.addEventListener("submit",(e)=>{

        e.preventDefault();

        const nueva = document.getElementById("nuevaPassword").value;
        const confirmar = document.getElementById("confirmarNuevaPassword").value;

        if(nueva || confirmar){

            if(nueva.length < 8){

                alert("La nueva contraseña debe tener al menos 8 caracteres.");

                return;

            }

            if(nueva !== confirmar){

                alert("Las nuevas contraseñas no coinciden.");

                return;

            }

        }

        document
            .getElementById("mensajePerfil")
            .classList.remove("d-none");

        setTimeout(()=>{

            document
                .getElementById("mensajePerfil")
                .classList.add("d-none");

        },3000);

    });

}

// ==========================
// FORMATO TELÉFONO
// ==========================

function formatoTelefono(){

    const telefono = document.getElementById("telefono");

    if(!telefono) return;

    telefono.addEventListener("input",()=>{

        let valor = telefono.value.replace(/\D/g,"");

        if(valor.length > 4){

            valor = valor.substring(0,4) + "-" + valor.substring(4,8);

        }

        telefono.value = valor;

    });

}




// ==========================
// INICIALIZACIÓN
// ==========================

document.addEventListener("DOMContentLoaded",()=>{

    // HOME

    renderParqueos();

    activarFavoritos();

    activarBotonesReserva();

    animarContadores();

    efectoNavbar();

    // BUSCADOR

    activarBuscador();

    activarBusquedaRapida();

    // AUTENTICACIÓN

    inicializarLogin();

    inicializarRegistro();

    inicializarRecuperacion();

    inicializarPerfil();

    formatoTelefono();

});