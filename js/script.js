/* ==========================================
   PARKEATE
   script.js
   Integrante 1
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       LOGIN
    ========================== */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const correo = document.getElementById("correo").value.trim();
            const password = document.getElementById("password").value.trim();

            if (correo === "" || password === "") {

                alert("Debe completar todos los campos.");

                return;
            }

            alert("Inicio de sesión exitoso.");

            // Simulación de ingreso al perfil
            window.location.href = "perfil.html";

        });

    }

    /* ==========================
       REGISTRO
    ========================== */

    const registroForm = document.getElementById("registroForm");

    if (registroForm) {

        registroForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const nombre = document.getElementById("nombre").value.trim();
            const correo = document.getElementById("correoRegistro").value.trim();
            const telefono = document.getElementById("telefono").value.trim();
            const password = document.getElementById("passwordRegistro").value;
            const confirmar = document.getElementById("confirmarPassword").value;

            if (!nombre || !correo || !telefono || !password || !confirmar) {

                alert("Todos los campos son obligatorios.");

                return;

            }

            if (password.length < 8) {

                alert("La contraseña debe tener al menos 8 caracteres.");

                return;

            }

            if (password !== confirmar) {

                alert("Las contraseñas no coinciden.");

                return;

            }

            alert("Usuario registrado correctamente.");

            window.location.href = "login.html";

        });

    }

    /* ==========================
       RECUPERAR CONTRASEÑA
    ========================== */

    const recuperarForm = document.getElementById("recuperarForm");

    if (recuperarForm) {

        recuperarForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const correo = document.getElementById("correoRecuperacion").value.trim();

            if (correo === "") {

                alert("Ingrese un correo electrónico.");

                return;

            }

            document
                .getElementById("mensajeRecuperacion")
                .classList.remove("d-none");

            recuperarForm.reset();

        });

    }

    /* ==========================
       PERFIL
    ========================== */

    const perfilForm = document.getElementById("perfilForm");

    if (perfilForm) {

        perfilForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const nueva = document.getElementById("nuevaPassword").value;
            const confirmar = document.getElementById("confirmarNuevaPassword").value;

            if (nueva !== "" || confirmar !== "") {

                if (nueva.length < 8) {

                    alert("La nueva contraseña debe tener al menos 8 caracteres.");

                    return;

                }

                if (nueva !== confirmar) {

                    alert("Las nuevas contraseñas no coinciden.");

                    return;

                }

            }

            document
                .getElementById("mensajePerfil")
                .classList.remove("d-none");

            setTimeout(function () {

                document
                    .getElementById("mensajePerfil")
                    .classList.add("d-none");

            }, 3000);

        });

    }

    /* ==========================
       FORMATO DEL TELÉFONO
    ========================== */

    const telefono = document.getElementById("telefono");

    if (telefono) {

        telefono.addEventListener("input", function () {

            let valor = telefono.value.replace(/\D/g, "");

            if (valor.length > 4) {

                valor = valor.substring(0, 4) + "-" + valor.substring(4, 8);

            }

            telefono.value = valor;

        });

    }

});