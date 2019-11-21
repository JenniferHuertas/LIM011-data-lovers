import POTTER from './data/potter/potter.js';
import {filterPatronus, filterVaritas, filterRolesCasas} from './data.js';

// Declaracion de Variables
const todosPersonajes = document.querySelector('#todosPersonajes');
const datosPersonaje = document.querySelector('#datosPersonaje');
const btnesInicio = document.querySelector('#btnesInicio');
const btnpersonajes = document.querySelector('#btnpersonajes');
const btnVaritas = document.querySelector('#btnvaritas');
const btnPatronus = document.querySelector('#btnpatronum');
const infoVaritas = document.querySelector('#infoVaritas');
const infoPatronus = document.querySelector('#infoPatronus');
const selectRoles = document.querySelector('#roles');
const selectCasas = document.querySelector('#casas');
const desplegable = document.querySelector('#desplegable')


// Nueva sección creada para contener la data de personajes y sus caracteristicas
const containerImage = (data) => {
  const sectionElement = document.createElement('section');
  sectionElement.innerHTML = `
  <section class = "listaPersonajes">
    <img class = "imagen1" src= ${data.image}>
    <p class= "nombre"> Nombre: ${data.name} </p>
  </section>
  `;
  sectionElement.addEventListener('click', (event) => {
    event.preventDefault();
    todosPersonajes.classList.add('hide');
    datosPersonaje.classList.remove('hide');
    desplegable.classList.add('hide');
    seccionCartilla.innerHTML = `  
    <section class="cartillaPersonajes">
      <img class = "imagen2" src= ${data.image}>
      <h2>Datos del Personaje</h2>
        <ul>
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

// Creando boton atras para lista de personajes
const botonRegresaInicio = document.createElement('button');
const creaTexto = document.createTextNode('Atras');
botonRegresaInicio.appendChild(creaTexto);
botonRegresaInicio.id = 'botonRegresaInicio';

// dándole un evento a mi botón
botonRegresaInicio.addEventListener('click', () => {
  todosPersonajes.classList.add('hide');
  desplegable.classList.add('hide');
  btnesInicio.classList.remove('hide');

});

// Creando mi botón de regresar para la cartilla
const botonRegresaAtras = document.createElement('button');
const crearTexto = document.createTextNode('Atras');
botonRegresaAtras.appendChild(crearTexto);
botonRegresaAtras.id = 'botonRegresaAtras';

// Creando una sección donde estarán mis elementos para poder insertar el botón
const seccionCartilla = document.createElement('section');
seccionCartilla.id = 'cartillaDePersonajes';
datosPersonaje.appendChild(botonRegresaAtras);
datosPersonaje.appendChild(seccionCartilla);

// Dándole un evento a mi botón
botonRegresaAtras.addEventListener('click', () => {
  datosPersonaje.classList.add('hide');
  todosPersonajes.classList.remove('hide');
  desplegable.classList.remove('hide');
});

for (let i = 0; i < POTTER.length; i += 1) {
  todosPersonajes.appendChild(containerImage(POTTER[i]));
  todosPersonajes.appendChild(botonRegresaInicio);
}

// Función ocultar para boton personajes
btnpersonajes.addEventListener('click', (event) => {
  event.preventDefault();
  btnesInicio.classList.add('hide');
  todosPersonajes.classList.remove('hide');
  desplegable.classList.remove('hide');
});

// Select de roles
selectRoles.addEventListener('change', (event) => {
  todosPersonajes.innerHTML = '';
  todosPersonajes.appendChild(botonRegresaInicio);
  if (event.target.value === 'estudiantes') {
    const filterEstudiantes = filterRolesCasas(POTTER, 'hogwartsStudent', true);
    for (let i = 0; i < filterEstudiantes.length; i += 1) {
      todosPersonajes.appendChild(containerImage(filterEstudiantes[i]));
    }
  } else if (event.target.value === 'profesores') {
    const filterProfesores = filterRolesCasas(POTTER, 'hogwartsStaff', true);
    for (let i = 0; i < filterProfesores.length; i += 1) {
      todosPersonajes.appendChild(containerImage(filterProfesores[i]));
      
    }
  }
});

for (let i = 0; i < POTTER.length; i += 1) {
  todosPersonajes.appendChild(containerImage(POTTER[i]));
}

// Select de casas
selectCasas.addEventListener('change', (event) => {
  todosPersonajes.innerHTML = '';
  todosPersonajes.appendChild(botonRegresaInicio);
  if (event.target.value === 'gryffindor') {
    const filterGryffindor = filterRolesCasas(POTTER, 'house', 'Gryffindor');
    for (let i = 0; i < filterGryffindor.length; i += 1) {
      todosPersonajes.appendChild(containerImage(filterGryffindor[i]));
    }
  } else if (event.target.value === 'slytherin') {
    const filterSlytherin = filterRolesCasas(POTTER, 'house', 'Slytherin');
    for (let i = 0; i < filterSlytherin.length; i += 1) {
      todosPersonajes.appendChild(containerImage(filterSlytherin[i]));
    }
  } else if (event.target.value === 'hufflepuff') {
    const filterHufflepuff = filterRolesCasas(POTTER, 'house', 'Hufflepuff');
    for (let i = 0; i < filterHufflepuff.length; i += 1) {
      todosPersonajes.appendChild(containerImage(filterHufflepuff[i]));
    }
  } else if (event.target.value === 'ravenclaw') {
    const filterRavenclaw = filterRolesCasas(POTTER, 'house', 'Ravenclaw');
    for (let i = 0; i < filterRavenclaw.length; i += 1) {
      todosPersonajes.appendChild(containerImage(filterRavenclaw[i]));
      
    }
  };
});

// Mostrar datos de las varitas
const imageVaritas = (data) => {
  let newVaritas = '';
  for (let i = 0; i < data.length; i += 1 ) {
    newVaritas += `
      <section class="listaPersonajes">
        <img class="imagen1" src=${data[i].image}>
        <p class= "nombre"> Madera: ${data[i].wand.wood} </p>
        <p class= "nombre"> Núcleo: ${data[i].wand.core} </p>
        <p class= "nombre"> Pertenece: ${data[i].name} </p>
      </section>
      
    `;
  }
  return newVaritas;
}

// Funcion ocultar para boton varitas 
btnVaritas.addEventListener('click', () => {
  btnesInicio.classList.add('hide');
  infoVaritas.classList.remove('hide');
  const filterVaritas1 = filterVaritas(POTTER,'wand');
  seccionBoton.innerHTML = imageVaritas(filterVaritas1);
});

// Creando mi botón de regresar para las varitas
const botonRegresar = document.createElement('button');
const crearNombre = document.createTextNode('Atras');
botonRegresar.appendChild(crearNombre);
botonRegresar.id = 'botonRegresar';

// Creando una sección donde estarán mis elementos para poder insertar el botón
const seccionBoton = document.createElement('section');
seccionBoton.id = 'btnAtrasVaritas';
infoVaritas.appendChild(botonRegresar);
infoVaritas.appendChild(seccionBoton);

// Dándole un evento a mi botón
botonRegresar.addEventListener('click', () => {
  infoVaritas.classList.add('hide');
  btnesInicio.classList.remove('hide');
});



// Mostrar datos de los patronus
const imagePatronus = (data) => {
  let newPatronus = '';
  for (let i = 0; i < data.length; i += 1 ) {
    newPatronus += `
      <section class = "listaPersonajes">
        <img class ="imagen1" src=${data[i].image}>
        <p class= "nombre"> Patronus: ${data[i].patronus} </p>
        <p class= "nombre"> Pertenece a: ${data[i].name} </p>
      </section>
    `;
  }
  return newPatronus;
}

// Funcion ocultar para boton patronus
btnPatronus.addEventListener('click', () => {
  btnesInicio.classList.add('hide');
  infoPatronus.classList.remove('hide');
  const filterPatronus1 = filterPatronus(POTTER, 'patronus');
  seccionBtnPat.innerHTML= imagePatronus(filterPatronus1);
});

// Creando mi botón de regresar para los patronus
const botonVolver = document.createElement('button');
const crearNombre1 = document.createTextNode('Atras');
botonVolver.appendChild(crearNombre1);
botonVolver.id = 'botonVolver';

// Creando una sección donde estarán mis elementos para poder insertar el botón
const seccionBtnPat = document.createElement('section');
seccionBtnPat.id = 'btnAtrasVaritas';
infoPatronus.appendChild(botonVolver);
infoPatronus.appendChild(seccionBtnPat);

// Dándole un evento a mi botón
botonVolver.addEventListener('click', () => {
  infoPatronus.classList.add('hide');
  btnesInicio.classList.remove('hide');
});


