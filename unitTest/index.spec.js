import { test, wrapperTest } from '../testingLibrary/index.js'
import { getDoble } from '../src/index.js'

wrapperTest('test logic', () => {
  test('Debería retornar 4', () => {
    const result = getDoble(2)
    if (result === 4) return true

    console.log('Debería retornar 4 ->', result)
    return false
  })

  test('Debería retornar 8', () => {
    const result = getDoble(4)
    if (result === 8) return true

    console.log('Debería retornar 8 ->', result)
    return false
  })
})

wrapperTest('test ui', () => {
  test('Debería  tener el texto "hola"', () => {
    const element = document.querySelector('#hola')

    if (!element) {
      return {
        reason: false,
        customMessage: 'No se encontró el elemento con id hola'
      }
    }

    if (element.innerHTML !== 'hola') {
      return {
        reason: false,
        customMessage: 'El elemento con id hola no tiene el texto "hola"'
      }
    }

    return true
  })
})
