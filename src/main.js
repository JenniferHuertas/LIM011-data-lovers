import POTTER from './data/potter/potter.js';
import { verpersonajes } from './data.js';

// Declaracion de Variables
const vista2 = document.querySelector('#vista2');
const datosPersonaje = document.querySelector('#datosPersonaje');
const vista1 = document.querySelector('#vista1');
const btnpersonajes = document.querySelector('#btnpersonajes');
const varitas = document.querySelector('#btnvaritas');
const patronum = document.querySelector('#btnpatronum');
const vista3 = document.querySelector('#vista3');
const vista4 = document.querySelector('#vista4');

const containerImage = (data) => {
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = `
  <img class = "imagen" src= ${data.image}>
  <p class ="nombre"> ${data.name} </p>
  `;
  sectionElement.addEventListener('click', (event) => {
    event.preventDefault();
    vista2.classList.add('hide');
    datosPersonaje.classList.remove('hide');
    datosPersonaje.innerHTML = `

    <ul class="cartilla" >
    <img class = "imagen" src= ${data.image}>
    <li>Name: ${data.name}</li>
    <li>Specie: ${data.species}</li>
    <li>Gender: ${data.gender}</li>
    <li>House: ${data.house}</li>   
    <li>Date of Birth: ${data.dateOfBirth}</li>  
    <li>Year of Birth: ${data.yearOfBirth}</li>    
    <li>Ancestry: ${data.ancestry}</li>    
    <li>Eye Colour: ${data.eyeColour}</li>   
    <li>Hair Colour: ${data.hairColour}</li>
    <li>Patronus: ${data.patronus}</li>   
    <li>Actor: ${data.actor}</li>    
    </ul>
    `;
  });

  vista2.appendChild(sectionElement);
};

for (let i = 0; i < POTTER.length; i += 1) {
  containerImage(POTTER[i]);
}

// Función ocultar para boton personajes

btnpersonajes.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista2.classList.remove('hide');
});

// Funcion ocultar para boton varitas
varitas.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista3.classList.remove('hide');
});

// Funcion ocultar para boton patronum
patronum.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista4.classList.remove('hide');
});

/*
console.log(POTTER)
*/
