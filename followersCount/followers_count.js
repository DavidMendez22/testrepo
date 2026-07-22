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
        }

    },500)
}