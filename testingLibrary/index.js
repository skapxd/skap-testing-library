/**
 * Envuelve todos los test en un grupo para
 * tener un mejor contexto de las pruebas que se están ejecutando
 * @param {string} message
 * @param {() => void} fn
 */
export const wrapper = (
  message = `default message of testingLibrary.wrapper  - ${Math.random()}`,
  fn = () => console.log('default function of testingLibrary.wrapper')
) => {
  console.group(message)
  fn()
  console.groupEnd(message)
}

/**
 * @param {string} message
 * @param {() => boolean | {reason: boolean, customMessage: string}} fn false = error test | true = success test
 */
export const test = (
  message = `default message of testingLibrary.test - ${Math.random()}`,
  fn = () => console.log('default function of testingLibrary.test')
) => {
  if (typeof fn() === 'boolean') {
    const isValid = fn()
    if (!isValid) return console.error(`❌fallido: ${message}`)

    return console.log(`✅exitoso: ${message}`)
  }

  if (typeof fn() === 'object') {
    const { reason, customMessage } = fn()
    if (!reason) return console.error(`❌fallido: ${message} - ${customMessage}`)

    return console.log(`✅exitoso: ${message}`)
  }
}

export const utils = {
  compareObjects: (obj1, obj2) => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) return false
    for (const key of keys1) {
      if (obj1[key] !== obj2[key]) return false
    }
    return true
  }
}
