import { test, wrapper } from '../testingLibrary/index.js'
import { getDoble } from '../src/index.js'

wrapper('test logic', () => {
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

wrapper('test ui', () => {
  test('Debería renederizar el texto "hola"', () => {
    const element = document.querySelector('#hola')

    if (!element) {
      return {
        customMessage: 'No se encontró el elemento con id hola',
        reason: false
      }
    }

    if (element.innerHTML !== 'hola') {
      return {
        customMessage: 'El elemento con id hola no tiene el texto "hola"',
        reason: false
      }
    }

    return true
  })
})
