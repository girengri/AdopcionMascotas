// import { listafavoritos } from "../scripts/infoPets.js";
const listGrupo = document.querySelector(".grid-mascotas"); //Capturamos donde vamos a mostrar los datos

const getLocalStorage = () => {
    const det = JSON.parse(localStorage.getItem("Detail"));
    const { imagen, nombre, raza, id } = det;

    listGrupo.innerHTML += `
    <div class="col mascotas">
        <div class="card bg-dark text-white gradiente">                
            <img src="${imagen}" class="card-img" alt="...">
            <div  class="card-img-overlay">
                <a  href="#"  class="enlace-detalle-mascota">
                <h5 id="${id}" class="card-title body2Bold">${nombre}</h5>
                </a>
                <p class="card-text body2Regular">${raza}</p>
             </div>
        </div>
    </div>
    `;
};

document.addEventListener("DOMContentLoaded", getLocalStorage);
