import POTTER from './data/potter/potter.js';
import {filterPatronus, imagePatronus, filterVaritas, imageVaritas, filterRoles, filterCasas} from './data.js';



// Declaracion de Variables
const vista2 = document.querySelector('#vista2');
const datosPersonaje = document.querySelector('#datosPersonaje');
const vista1 = document.querySelector('#vista1');
const btnpersonajes = document.querySelector('#btnpersonajes');
const btnVaritas = document.querySelector('#btnvaritas');
const patronum = document.querySelector('#btnpatronum');
const vista3 = document.querySelector('#vista3');
const vista4 = document.querySelector('#vista4');
const roles = document.querySelector('#roles');
const casas = document.querySelector('#casas');

// Nueva sección creada para contener la data de personajes y sus caracteristicas
const containerImage = (data) => {
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = `
  <img class = "imagen1" src= ${data.image}>
  <p class ="nombre1"> Nombre: ${data.name} </p>
  `;
  sectionElement.addEventListener('click', (event) => {
    event.preventDefault();
    vista2.classList.add('hide');
    datosPersonaje.classList.remove('hide');
    datosPersonaje.innerHTML = `  
    <ul class="cartilla" >
    <img class = "imagen2" src= ${data.image}>
    <li>Nombre: ${data.name}</li>
    <li>Especie: ${data.species}</li>
    <li>Género: ${data.gender}</li>
    <li>Casa: ${data.house}</li>   
    <li>Fecha de Nacimiento: ${data.dateOfBirth}</li>  
    <li>Año de Nacimiento: ${data.yearOfBirth}</li>    
    <li>Ascendencia: ${data.ancestry}</li>    
    <li>Color de Ojos: ${data.eyeColour}</li>   
    <li>Color de Cabello: ${data.hairColour}</li>
    <li>Patronus: ${data.patronus}</li>   
    <li>Actor: ${data.actor}</li>    
    </ul>
    `;
  });

  return sectionElement;
};

// Select de roles
for (let i = 0; i < POTTER.length; i += 1) {
  vista2.appendChild(containerImage(POTTER[i]));
}

roles.addEventListener('change', (event) => {
  vista2.innerHTML = '';

  if (event.target.value === 'estudiantes') {
    const filterEstudiantes = filterRoles(POTTER, 'hogwartsStudent', true);
    for (let i = 0; i < filterEstudiantes.length; i += 1) {
      vista2.appendChild(containerImage(filterEstudiantes[i]));
    }
  } else if (event.target.value === 'profesores') {
    const filterProfesores = filterRoles(POTTER, 'hogwartsStaff', true);
    for (let i = 0; i < filterProfesores.length; i += 1) {
      vista2.appendChild(containerImage(filterProfesores[i]));
    }
  }
});

// Select de casas
for (let i = 0; i < POTTER.length; i += 1) {
  vista2.appendChild(containerImage(POTTER[i]));
}

casas.addEventListener('change', (event) => {
  vista2.innerHTML = '';

  if (event.target.value === 'gryffindor') {
    const filterCasas1 = filterCasas(POTTER, 'house', 'gryffindor');
    for (let i = 0; i < filterCasas1.length; i += 1) {
      vista2.appendChild(containerImage(filterCasas1[i]));
    }
  } else if (event.target.value === 'slytherin') {
    const filterCasas1 = filterCasas(POTTER, 'house', 'slytherin');
    for (let i = 0; i < filterCasas1.length; i += 1) {
      vista2.appendChild(containerImage(filterCasas1[i]));
    }
  }
});


// Función ocultar para boton personajes

btnpersonajes.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista2.classList.remove('hide');
});

// Funcion ocultar para boton varitas y mostrar datos de las varitas
btnVaritas.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista3.classList.remove('hide');
  const filterVaritas1 = filterVaritas(POTTER,'wand');
  vista3.innerHTML= imageVaritas(filterVaritas1);
});

// Funcion ocultar para boton patronum y jalar datos de patronus
patronum.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista4.classList.remove('hide');
  const filterPatronus1 = filterPatronus(POTTER, 'patronus');
  vista4.innerHTML= imagePatronus(filterPatronus1);
});
