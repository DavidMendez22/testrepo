let count = 0;

const increaseCount = () => {
    count++
    displayCount()
    checkCountValue()
}

const displayCount = () => {
    document.querySelector('#countDisplay').innerHTML = count
}


const checkCountValue = () => {
    setTimeout(() => {
        if (count === 10) {
            alert('¡Tu publicación de Instagram ganó 10 seguidores! ¡Felicidades!')
        } else if (count === 20) {
            alert('Tu publicación de Instagram ganó 20 seguidores! ¡Sigue así!')
        }else if(count === 0){
            alert('El conteo de seguidores ha sido restablecido.')
        }

    }, 800)
}

const resetCounter = () => {
    count = 0
    displayCount()
    checkCountValue()
}