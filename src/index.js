const input = document.querySelector('input')
const output = document.querySelector('#output')

input.addEventListener('input', (e) => {
  const data = e.target.value
  const doble = getDoble(+data)
  output.innerHTML = doble
})

// Juega con esta función tanto como quieras!!!
export const getDoble = value => {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('El valor debe ser un número')
  }

  return value * 2
}
