const initClock = () => {
  const element = document.querySelector('[data-clock]')

  if (!element) {
    return
  }

  const hourHand = element.querySelector('[data-hand="hour"]')
  const minuteHand = element.querySelector('[data-hand="minute"]')
  const secondHand = element.querySelector('[data-hand="second"]')
  setClock(hourHand, minuteHand, secondHand)
  setInterval(() => setClock(hourHand, minuteHand, secondHand), 1000)
}

const setClock = (hourHand, minuteHand, secondHand) => {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
  setAngle(secondHand, secondsRatio)
  setAngle(minuteHand, minutesRatio)
  setAngle(hourHand, hoursRatio)
}

const setAngle = (hand, angleRatio) => {
  hand.style.setProperty('--angle', angleRatio * 360)
}

initClock()
