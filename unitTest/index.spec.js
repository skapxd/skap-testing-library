import {test, wrapper} from '../testingLibrary/index.js'
import { multX2 } from '../src/index.js';

wrapper('test logic', () => {
  test('Deberia retornar 4', () => {
    const result = multX2(2);
    console.log('Deberia retornar 4 ->', result);
    if (result === 4) {
      return true;
    }
    return false;
  });
  
  test('Deberia retornar 8', () => {
    const result = multX2(4);
    console.log('Deberia retornar 8 ->', result);
    if (result === 8) {
      return true;
    }
    return false;
  });
  
})

wrapper('test ui', () => {
  test('Deberia renederizar el texto "hola"', () => {
    const elemet = document.querySelector('#hola');
    console.log(elemet);
    if (elemet) {
      return true;
    }
    return false;
  });

})
