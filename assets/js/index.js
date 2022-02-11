
import {
    Leon, Lobo, Oso, Serpiente, Aguila
} from "./clases/animal.js";

let objectAnimales = {};
let arrayAnimales = [];

(async () => {
    try {
        const res = await fetch("animales.json");
        const { animales } = await res.json();
        animales.forEach((item) => {
            objectAnimales[item.name] = item;
        });
    } catch (error) {
        console.log(error);
    }
})();


let form = document.getElementById("form");
let listaAnimales = document.getElementById("animales");
let tipoAnimal = document.getElementById("animal")
let rangoEdad = document.getElementById("edad");
let comentarios = document.getElementById("comentarios");
let previewAnimal = document.getElementById("preview")

tipoAnimal.addEventListener("change", (event) => {
    previewAnimal.innerHTML = ` <img src="assets/imgs/${objectAnimales[event.target.value].imagen}" alt="" class="img-fluid"> `;
})

const pintarAnimales = () => {
    listaAnimales.innerHTML = "";
    arrayAnimales.forEach((item) => {
        listaAnimales.innerHTML += `
        <article class="card">
            <img src="assets/imgs/${item._img}" alt="" class="card-img-top">
            <div class="card-body">
                <h5>${item.nombre}</h5>
            </div>
        </article>
        `;
    });
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (animal.value === "Leon") {
        const leon = new Leon(
            animal.value,
            edad.value,
            objectAnimales[animal.value].imagen,
            comentarios.value,
            objectAnimales[animal.value].sonido
        );
        arrayAnimales.push(leon);
        console.log(leon);
    }
    if (animal.value === "Lobo") {
        const lobo = new Lobo(
            animal.value,
            edad.value,
            objectAnimales[animal.value].imagen,
            comentarios.value,
            objectAnimales[animal.value].sonido
        );
        arrayAnimales.push(lobo);
    }
    if (animal.value === "Oso") {
        const oso = new Oso(
            animal.value,
            edad.value,
            objectAnimales[animal.value].imagen,
            comentarios.value,
            objectAnimales[animal.value].sonido
        );
        arrayAnimales.push(oso);
          
    }
    if (animal.value === "Serpiente") {
        const serpiente = new Serpiente(
            animal.value,
            edad.value,
            objectAnimales[animal.value].imagen,
            comentarios.value,
            objectAnimales[animal.value].sonido
        );
        arrayAnimales.push(serpiente);
         
    }
    if (animal.value === "Aguila") {
        const aguila = new Aguila(
            animal.value,
            edad.value,
            objectAnimales[animal.value].imagen,
            comentarios.value,
            objectAnimales[animal.value].sonido
        );
        arrayAnimales.push(aguila);
          
    }
    pintarAnimales();
});



