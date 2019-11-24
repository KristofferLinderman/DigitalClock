const clockContainer = document.getElementById('clockContainer')
const hourContainer = document.getElementById('hourContainer')
const minutesContainer = document.getElementById('minutesContainer')
const secondsContainer = document.getElementById('secondsContainer')

window.onload = () => {
    createClock()
}

function createClock() {
    console.log("Creating clock..")

    setHour(NUMBER_ZERO)

}

function setHour(pixelGrid) {
    pixelGrid.forEach(arr => {
        arr.forEach(pixel => {

        })
    });
}