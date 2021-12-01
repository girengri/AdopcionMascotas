import { pusuarios as endpoint } from "../scripts/url.js";

window.addEventListener("DOMContentLoaded", async () => {
    document.getElementById("id").style.display = "none";
    document.getElementById("label-edit").style.display = "none";
});

const capturarDatos = () => {
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastName").value;
    let correo = document.getElementById("email").value;

    const user = {
        nombre,
        apellido,
        correo,
    };
    return user;
};

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", async (e) => {
    e.preventDefault();

    const objeto = capturarDatos();

    await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(objeto),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    });

    Swal.fire({
        position: "top",
        icon: "success",
        title: "El usuario se ha guardado con exito",
        showConfirmButton: false,
        timer: 20000,
    });

    formulario.reset();
});
