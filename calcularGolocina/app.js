let grocery1 = document.querySelector('#grocery1')
let grocery2 = document.querySelector('#grocery2')
let grocery3 = document.querySelector('#grocery3')
let resultado;


const calcularTotal = () => {
    grocery1 = parseFloat(grocery1.value)
    grocery2 = parseFloat(grocery2.value)
    grocery3 = parseFloat(grocery3.value)
    resultado = document.querySelector('#result')


    let total = grocery1 + grocery2 + grocery3
    resultado.innerText = `The total amount is: $${total * 1}`
    console.log(total)
    return total
}