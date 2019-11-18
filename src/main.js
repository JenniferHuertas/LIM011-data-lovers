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
    <p class= "nombre"> Nombre: ${data.name} </p>
  </section>
  `;
  sectionElement.addEventListener('click', (event) => {
    event.preventDefault();
    vista2.classList.add('hide');
    datosPersonaje.classList.remove('hide');
    datosPersonaje.innerHTML = `  
    <section class="ordenar1">
      <img class = "imagen2" src= ${data.image}>
      <h2>Datos del Personaje</h2>
        <ul class="cartilla" >
          <li class="name">Nombre: ${data.name}</li>
          <li class="name">Especie: ${data.species}</li>
          <li class="name">Género: ${data.gender}</li>
          <li class="name">Casa: ${data.house}</li>   
          <li class="name">Fecha de Nacimiento: ${data.dateOfBirth}</li>  
          <li class="name">Año de Nacimiento: ${data.yearOfBirth}</li>    
          <li class="name">Ascendencia: ${data.ancestry}</li>    
          <li class="name">Color de Ojos: ${data.eyeColour}</li>   
          <li class="name">Color de Cabello: ${data.hairColour}</li>
          <li class="name">Patronus: ${data.patronus}</li>   
          <li class="name">Actor: ${data.actor}</li>    
      </ul>
     </section>
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
  roles.classList.remove('hide');
  casas.classList.remove('hide');
});

// Funcion ocultar para boton varitas y mostrar datos de las varitas
const imageVaritas = (data) => {
  let newVaritas = '';
  for (let i = 0; i < data.length; i += 1 ) {
    newVaritas += `
      <section class="lispersonajes">
        <img class="imagen1" src=${data[i].image}>
        <p class= "nombre"> Madera: ${data[i].wand.wood} </p>
        <p class= "nombre"> Núcleo: ${data[i].wand.core} </p>
        <p class= "nombre"> Pertenece: ${data[i].name} </p>
      
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
      <section class = "lispersonajes">
        <img class ="imagen1" src=${data[i].image}>
        <p class= "nombre"> Patronus: ${data[i].patronus} </p>
        <p class= "nombre"> Pertenece a: ${data[i].name} </p>
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
