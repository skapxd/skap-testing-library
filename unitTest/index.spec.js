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

  test('Debería ser una excepción al mandarle un string', () => {
    try {
      const result = getDoble('n')
      console.log('result ->', result)
      return false
    } catch (error) {
      return true
    }
  })
})

wrapperTest('test ui', () => {
  test('Debería  tener el titulo "Dame un numero que te lo multiplico por 2"', () => {
    const element = document.querySelector('p')

    if (!element) {
      return {
        isSuccess: false,
        customMessage: 'No se encontró el elemento con id hola'
      }
    }

    if (element.innerHTML !== 'Dame un numero que te lo multiplico por 2') {
      return {
        isSuccess: false,
        customMessage: 'El elemento con id hola no tiene el texto "hola"'
      }
    }

    return true
  })
})
