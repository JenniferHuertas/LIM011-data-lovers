import POTTER from './data/potter/potter.js';
import { verpersonajes } from './data.js';

const containerImage = (data) => {
  const sectionElement = document.createElement('section');
};

const vista2 = document.querySelector('#vista2');
let personajes = '';
for (let i = 0; i < POTTER.length; i += 1) {
  containerImage(POTTER[i]);
  personajes += `
   <section class = "botones">
   <img class = "imagen" src= ${POTTER[i].image}>
   <p class ="nombre"> ${POTTER[i].name} </p>
   </section>
   `;
  vista2.innerHTML = personajes;
}


// Declaracion de Variables

const vista1 = document.getElementById('vista1');
// const vista2 = document.getElementById('vista2');
const datosharry = document.getElementById('datosharry');
const btnpersonajes = document.getElementById('btnpersonajes');
const varitas = document.getElementById('btnvaritas');
const patronum = document.getElementById('btnpatronum');
const harry = document.getElementById('btnharry');
const vista3 = document.getElementById('vista3');
const vista4 = document.getElementById('vista4');


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

// Función ocultar para boton harry
harry.addEventListener('click', (event) => {
  event.preventDefault();
  vista2.classList.add('hide');
  datosharry.classList.remove('hide');
});

/*
console.log(POTTER)
*/
