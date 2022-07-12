import {testConsole} from '../testingLibrary/index.js'

// Juega con esta funcion tanto como quieras!!!
const multX2 = value => value * 2;

testConsole('Deberia retornar 4', () => {
  const result = multX2(2);
  console.log('Deberia retornar 4 ->', result);
  if (result === 4) {
    return true;
  }
  return false;
});

testConsole('Deberia retornar 8', () => {
  const result = multX2(4);
  console.log('Deberia retornar 8 ->', result);
  if (result === 8) {
    return true;
  }
  return false;
});

testConsole('Deberia renederizar el texto "hola"', () => {
  const elemet = document.querySelector('#hola');
  console.log(elemet);
  if (elemet) {
    return true;
  }
  return false;
});
