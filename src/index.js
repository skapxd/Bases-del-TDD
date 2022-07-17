console.log('Aqui va el codigo de produccion');

export const getDoble = numero => {
    if (typeof numero !== 'number') throw new Error('El paramero enviado debe ser un numero')
    return numero * 2
}

const input = document.querySelector('input')
const output = document.querySelector('#output')

input.addEventListener('input', function (e) {
    const {value} = e.target
    console.log(value) 
    output.innerHTML = getDoble(+value)
})