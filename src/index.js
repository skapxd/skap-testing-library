console.log('Código de producción')

// Juega con esta función tanto como quieras!!!
export const getDoble = value => {
  if (typeof value !== 'number') {
    throw new Error('El valor debe ser un número')
  }

  return value * 2
}
