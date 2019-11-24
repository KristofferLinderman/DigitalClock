const clockContainer = document.getElementById('clockContainer')

const firstHourBlocks = document.getElementsByClassName('firstHour')
const secondHourBlocks = document.getElementsByClassName('secondHour')
const hoursArray = [firstHourBlocks, secondHourBlocks]

const firstMinuteBlocks = document.getElementsByClassName('firstMinute')
const secondMinuteBlocks = document.getElementsByClassName('secondMinute')
const minutesArray = [firstMinuteBlocks, secondMinuteBlocks]

const firstSecondBlocks = document.getElementsByClassName('firstSecond')
const secondSecondBlocks = document.getElementsByClassName('secondSecond')
const secondsArray = [firstSecondBlocks, secondSecondBlocks]

let currentTime

window.onload = () => {
    currentTime = new Date()

    setInterval(createClock, 1000)
}

function createClock() {
    currentTime = new Date()
    let hours = currentTime.getHours()
    let minutes = currentTime.getMinutes()
    let seconds = currentTime.getSeconds()

    setTime(hoursArray, hours)
    setTime(minutesArray, minutes)
    setTime(secondsArray, seconds)

}

function setTime(elementArray, time) {

    //Check if a zero needs to be added then makes a string
    time = time < 10 ? `0${time}` : `${time}`
    time = time.split('')

    let firstDigit = time[0]
    let secondDigit = time[1]

    let pixelCount = 0

    let pixelGrid = NUMBERS[firstDigit]
    pixelGrid.forEach(arr => {
        arr.forEach(pixel => {
            if (pixel === 1) {
                elementArray[0][pixelCount].classList.add("showPixel")
                elementArray[0][pixelCount].classList.remove("hidePixel")
            }
            else {
                elementArray[0][pixelCount].classList.add("hidePixel")
                elementArray[0][pixelCount].classList.remove("showPixel")
            }

            pixelCount++
        })
    });

    pixelCount = 0
    pixelGrid = NUMBERS[secondDigit]
    pixelGrid.forEach(arr => {
        arr.forEach(pixel => {
            if (pixel === 1) {
                elementArray[1][pixelCount].classList.add("showPixel")
                elementArray[1][pixelCount].classList.remove("hidePixel")
            }
            else {
                elementArray[1][pixelCount].classList.add("hidePixel")
                elementArray[1][pixelCount].classList.remove("showPixel")
            }
            pixelCount++
        })
    });
}