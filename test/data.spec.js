// importamos la función example
import { filterPatronus, filterVaritas, filterRolesCasas } from '../src/data';

describe('filtrado por patronus', () => {
  it('debería ser una función', () => {
    expect(typeof filterPatronus).toBe('function');
  });
  it('deberia retornar un nuevo array con los datos solicitados', () => {
    const inputPatronus = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg', patronus: 'stag' }, { name: 'Draco Malfoy', image: 'http://hp-api.herokuapp.com/images/draco.jpg', patronus: '' }];
    const outputPatronus = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg', patronus: 'stag' }];
    expect(filterPatronus(inputPatronus, 'patronus', 'stag')).toEqual(outputPatronus);
  });
});

describe('filtrado por varitas', () => {
  it('debería ser una función', () => {
    expect(typeof filterVaritas).toBe('function');
  });
  it('debería retornar un nuevo array con datos de varitas', () => {
    const inputVaritas = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg', wand: { wood: 'holly', core: 'phoenix feather' } }, { name: 'Minerva McGonagall', image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg' }];
    const outputVaritas = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg', wand: { wood: 'holly', core: 'phoenix feather' } }];
    expect(filterVaritas(inputVaritas, 'wand')).toEqual(outputVaritas);
  });
  it('debería mostrar datos de los que tienen sólo madera', () => {
    const inputVaritas2 = [{ wand: { wood: 'holly', core: 'phoenix feather' } }, { wand: { wood: '', core: '' } }];
    const outputVaritas2 = [{ wand: { wood: 'holly', core: 'phoenix feather' } }];
    expect(filterVaritas(inputVaritas2, 'wand', 'wood', 'core')).toEqual(outputVaritas2);
  });
});

describe('filtrado por Roles', () => {
  it('debería ser una función', () => {
    expect(typeof filterRolesCasas).toBe('function');
  });
  it('debería retornar un nuevo array con los datos de estudiantes', () => {
    const inputRoles = [{ name: 'Draco Malfoy', image: 'http://hp-api.herokuapp.com/images/draco.jpg', hogwartsStudent: true }, { name: 'Minerva McGonagall', image: 'http://hp-api.herokuapp.com/images/mcgonagall.jpg', hogwartsStudent: false }];
    const outputRoles = [{ name: 'Draco Malfoy', image: 'http://hp-api.herokuapp.com/images/draco.jpg' }];
    expect(filterRolesCasas(inputRoles, 'hogwartsStudent', true)).toEqual(outputRoles);
  });
});

describe('Filtrado por casas', () => {
  it('debería ser una función', () => {
    expect(typeof filterRolesCasas).toBe('function');
  });
  it('deberia retornar array con casa Gryffindor', () => {
    const inputGryffindor = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg', house: 'Gryffindor' }, { name: 'Draco Malfoy', image: 'http://hp-api.herokuapp.com/images/draco.jpg', house: 'Slytherin' }];
    const outputGryffindor = [{ name: 'Harry Potter', image: 'http://hp-api.herokuapp.com/images/harry.jpg' }];
    expect(filterRolesCasas(inputGryffindor, 'house', 'Gryffindor')).toEqual(outputGryffindor);
  });
});
