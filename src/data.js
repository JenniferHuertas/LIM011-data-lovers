// Filtrado de patronus
export const filterPatronus = (data, prop) => {
    let arrayPatronus = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i][prop]) {
        arrayPatronus.push({
          name: data[i].name,
          image: data[i].image,
          patronus: data[i].patronus
        });
      }
    }
    return arrayPatronus;
  };

  export const imagePatronus = (data) => {
    let newPatronus = '';
    for (let i = 0; i < data.length; i += 1 ) {
      newPatronus += `
        <section class = "vista4">
          <img class ="imagen3" src=${data[i].image}>
          <p class ="patronus"> Nombre: ${data[i].patronus} </p>
          <p class ="nombre2"> Pertenece a: ${data[i].name} </p>
        </section>
      `;
    }
    return newPatronus;
  }

  export const filterVaritas = (data, propiedad) => {
    let arrayVaritas = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i][propiedad]) {
        arrayVaritas.push({
          name: data[i].name,
          image: data[i].image,
          wand: {
            wood: data[i].wand.wood,
            core: data[i].wand.core,
          }
        });
      }
    }
    return arrayVaritas;
  };

  export const imageVaritas = (data) => {
    let newVaritas = '';
    for (let i = 0; i < data.length; i += 1 ) {
      newVaritas += `
        <section class="vista3">
          <img class="imagen4" src=${data[i].image}>
          <p class="nombre3"> Madera: ${data[i].wand.wood} </p>
          <p class="nombre3"> Núcleo: ${data[i].wand.core} </p>
          <p class="nombre3"> Pertenece a: ${data[i].name} </p>
        
        </section>
      `;
    }
    return newVaritas;
  }

  export const filterRoles = (data, propiedad, value) => {
    const newRoles = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i][propiedad] === value) {
        newRoles.push({
          name: data[i].name,
          image: data[i].image,
        });
      }
    }
    return newRoles;
  };

  export const filterCasas = (data, propiedad, value) => {
    const newCasas = [];
    for (let i = 0; i < data.length; i += 1) {
      if (data[i][propiedad] === value) {
        newCasas.push({
          name: data[i].name,
          image: data[i].image,
        });
      }
    }
    return newCasas;
  };

  

