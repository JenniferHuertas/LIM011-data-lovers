import POTTER from './data/potter/potter.js';
import {filterPatronus, filterVaritas, filterRolesCasas} from './data.js';



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
  <section class = "lispersonajes">
    <img class = "imagen1" src= ${data.image}>
    <p> Nombre: ${data.name} </p>
  </section>
  `;
  sectionElement.addEventListener('click', (event) => {
    event.preventDefault();
    vista2.classList.add('hide');
    datosPersonaje.classList.remove('hide');
    datosPersonaje.innerHTML = `  
    <ul class="cartilla" >
    <img class = "imagen1" src= ${data.image}>
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

for (let i = 0; i < POTTER.length; i += 1) {
  vista2.appendChild(containerImage(POTTER[i]));
}

// Select de roles
roles.addEventListener('change', (event) => {
  vista2.innerHTML = '';

  if (event.target.value === 'estudiantes') {
    const filterEstudiantes = filterRolesCasas(POTTER, 'hogwartsStudent', true);
    for (let i = 0; i < filterEstudiantes.length; i += 1) {
      vista2.appendChild(containerImage(filterEstudiantes[i]));
    }
  } else if (event.target.value === 'profesores') {
    const filterProfesores = filterRolesCasas(POTTER, 'hogwartsStaff', true);
    for (let i = 0; i < filterProfesores.length; i += 1) {
      vista2.appendChild(containerImage(filterProfesores[i]));
    }
  }
});

for (let i = 0; i < POTTER.length; i += 1) {
  vista2.appendChild(containerImage(POTTER[i]));
}

// Select de casas
casas.addEventListener('change', (event) => {
  vista2.innerHTML = '';

  if (event.target.value === 'gryffindor') {
    const filterGryffindor = filterRolesCasas(POTTER, 'house', 'Gryffindor');
    for (let i = 0; i < filterGryffindor.length; i += 1) {
      vista2.appendChild(containerImage(filterGryffindor[i]));
    }
  } else if (event.target.value === 'slytherin') {
    const filterSlytherin = filterRolesCasas(POTTER, 'house', 'Slytherin');
    for (let i = 0; i < filterSlytherin.length; i += 1) {
      vista2.appendChild(containerImage(filterSlytherin[i]));
    }
  } else if (event.target.value === 'hufflepuff') {
    const filterHufflepuff = filterRolesCasas(POTTER, 'house', 'Hufflepuff');
    for (let i = 0; i < filterHufflepuff.length; i += 1) {
      vista2.appendChild(containerImage(filterHufflepuff[i]));
    }
  } else if (event.target.value === 'ravenclaw') {
    const filterRavenclaw = filterRolesCasas(POTTER, 'house', 'Ravenclaw');
    for (let i = 0; i < filterRavenclaw.length; i += 1) {
      vista2.appendChild(containerImage(filterRavenclaw[i]));
    }
  };
});


// Función ocultar para boton personajes

btnpersonajes.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista2.classList.remove('hide');
});

// Funcion ocultar para boton varitas y mostrar datos de las varitas
const imageVaritas = (data) => {
  let newVaritas = '';
  for (let i = 0; i < data.length; i += 1 ) {
    newVaritas += `
      <section class="vista3">
        <img class="imagen1" src=${data[i].image}>
        <p> Madera: ${data[i].wand.wood} </p>
        <p> Núcleo: ${data[i].wand.core} </p>
        <p> Pertenece a: ${data[i].name} </p>
      
      </section>
    `;
  }
  return newVaritas;
}


btnVaritas.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista3.classList.remove('hide');
  const filterVaritas1 = filterVaritas(POTTER,'wand');
  vista3.innerHTML= imageVaritas(filterVaritas1);
});

// Funcion ocultar para boton patronus y jalar datos de patronus
const imagePatronus = (data) => {
  let newPatronus = '';
  for (let i = 0; i < data.length; i += 1 ) {
    newPatronus += `
      <section class = "vista4">
        <img class ="imagen1" src=${data[i].image}>
        <p> Patronus: ${data[i].patronus} </p>
        <p> Pertenece a: ${data[i].name} </p>
      </section>
    `;
  }
  return newPatronus;
}

patronum.addEventListener('click', (event) => {
  event.preventDefault();
  vista1.classList.add('hide');
  vista4.classList.remove('hide');
  const filterPatronus1 = filterPatronus(POTTER, 'patronus');
  vista4.innerHTML= imagePatronus(filterPatronus1);
});
