//Vamos a obtener la data del localStorage
const listGroup = document.querySelector(".contenedor"); //Capturamos donde vamos a mostrar los datos

//Obtener informacion del localStorage
const getLocalStorage = () => {
    const objetMascotas = JSON.parse(localStorage.getItem("Detail")); //Obtenemos el key Detail y lo convierto en un JSON

    const {
        nombre,
        raza,
        edad,
        ubicacion,
        personalidad,
        historia,
        usuario,
        imgusuario,
        imagen,
        genero,
        id,
    } = objetMascotas;

    listGroup.innerHTML += `
    <header class="pet-header">
    <img src="${imagen}" alt="${nombre}" />
    <a href="indextres.html" class="header-get-back"><img
            src="https://res.cloudinary.com/girengri/image/upload/v1637793732/AdopcionMascotas/back_bxcows.png"
            alt="volver" /></a>
    </header>

    <main class="pet-description-container">
    <section class="pet-gender">
        <article class="main-pet-information">
            <div>
                <h2>"${nombre}"</h2>
                <img class=generomascota src="${genero}" alt="genero" />
            </div>
            <img id="${id}" class="favoritos"
                src="https://res.cloudinary.com/girengri/image/upload/v1637794460/AdopcionMascotas/Guardar_llyaz4.png"
                alt="favorite" />
        </article>

        <article class="about-pet">
            <div class="important-pet-information">
                <div>
                    <img src="https://res.cloudinary.com/girengri/image/upload/v1637794719/AdopcionMascotas/raza_lnoxv8.png"
                        alt="Raza" />
                    <p>"${raza}"</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/girengri/image/upload/v1637794986/AdopcionMascotas/edad_jojgdf.png"
                        alt="Edad" />
                    <p>"${edad}"</p>
                </div>
            </div>

            <div class="pet-location">
                <img src="https://res.cloudinary.com/girengri/image/upload/v1637795075/AdopcionMascotas/ubicacion_s9m0zt.png"
                    alt="location" />
                <p>"${ubicacion}"</p>
            </div>
        </article>

        <section class="information-about-pet">
            <h3>Personalidad</h3>
            <section class="pet-personality">
                <article>
                    <img src="https://res.cloudinary.com/girengri/image/upload/v1637795544/AdopcionMascotas/cari%C3%B1oso_hunfvk.png"
                        alt="cariñoso" />
                    <p>"${personalidad[0]}"</p>
                </article>
                <article>
                    <img src="https://res.cloudinary.com/girengri/image/upload/v1637795868/AdopcionMascotas/caracteristicas_nv5u6a.png"
                        alt="inquieto" />
                    <p>"${personalidad[1]}"</p>
                </article>
                <article>
                    <img src="https://res.cloudinary.com/girengri/image/upload/v1637795904/AdopcionMascotas/jugueton_szivcw.png"
                        alt="jugueton" />
                    <p>${personalidad[2]}</p>
                </article>
            </section>
        </section>

        <article class="pet-story">
            <h3>Historia de "${nombre}"</h3>
            <p>"${historia}"</p>
        </article>

        <section class="user-section">
            <div class="user-information">
                <div class="user-information-paraphs">
                    <img src="${imgusuario}" alt="user" />
                    <p>
                        Publicado por <br />
                        <strong>${usuario}</strong>
                    </p>
                </div>
                <a href="mensajes.html"><img
                        src="https://res.cloudinary.com/girengri/image/upload/v1637796159/AdopcionMascotas/contactar_indkni.png"
                        alt="contactar" /></a>
            </div>
        </section>
    </section>
</main>
    `;
};

document.addEventListener("DOMContentLoaded", getLocalStorage);

// const botonFavoritos = document.querySelector("e.target.id");
// export const listafavoritos = [];

// botonFavoritos.addEventListener("click", () => {
//     const mascotasobjeto = JSON.parse(localStorage.getItem("Detail"));
//     listafavoritos.push(mascotasobjeto);
// });
