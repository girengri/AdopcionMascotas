import { data } from "../data/mascotas.js";

let btnGato = document.getElementById("btnGato");
let btnPerro = document.getElementById("btnperro");
const gridCard = document.querySelector(".grid-mascotas");

btnGato.addEventListener("click", () => {
  gridCard.innerHTML = "";
  let gatos = data.filter((mascotas) => mascotas.categoria === "gato");
  gatos.forEach((mascota) => {
    const { imagen, nombre, raza, id } = mascota;
    gridCard.innerHTML += `
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
  });
});

btnPerro.addEventListener("click", () => {
  gridCard.innerHTML = "";
  let perros = data.filter((mascotas) => mascotas.categoria === "perro");
  perros.forEach((mascota) => {
    const { imagen, nombre, raza, id } = mascota;
    gridCard.innerHTML += `
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
  });
});

gridCard.addEventListener("click", (e) => {
  const id = e.target.id; //capturamos el id y ya consegui el id
  const btnDetail = e.target.classList.contains("card-title"); //capturamos la clase del boton. contains nos devuelve un booleano
  console.log(e.target);

  //Si hago click en brnDetail traigame toda la data
  if (btnDetail) {
    const lista = data; //Me queda almacenado una promesa por resolver
    //console.log(lista);
    console.log("hizo click en el boton detail");
    //utilizo find para buscar en la lista el elemento del objeto que queremos buscar
    const objeto = lista.find((list) => list.id === Number(id));
    //console.log(objeto);
    //Almacenar en el localStorage
    localStorage.setItem("Detail", JSON.stringify(objeto));
    window.location.href = "infomascotas.html"; //Aca relaciono la pagina donde se van a pintar los datos del detail
  }
});
