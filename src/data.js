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
          <img class ="imagen1" src=${data[i].image}>
          <p> Patronus: ${data[i].patronus} </p>
          <p> Pertenece a: ${data[i].name} </p>
        </section>
      `;
    }
    return newPatronus;
  }

  // Filtrado de Varitas
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
          <img class="imagen1" src=${data[i].image}>
          <p> Madera: ${data[i].wand.wood} </p>
          <p> Núcleo: ${data[i].wand.core} </p>
          <p> Pertenece a: ${data[i].name} </p>
        
        </section>
      `;
    }
    return newVaritas;
  }

  //Filtrado de Roles y Casas
  export const filterRolesCasas = (data, propiedad, value) => {
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

  



  
  

