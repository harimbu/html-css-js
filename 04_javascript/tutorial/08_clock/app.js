const clock = document.querySelector('.clock')

function getTime() {
  const now = new Date()
  const hours = now.getHours()
  const minutes = now.getMinutes()
  const seconds = now.getSeconds()

  const hour = `${hours}` < 10 ? `0${hours}` : `${hours}`
  const min = `${minutes}` < 10 ? `0${minutes}` : `${minutes}`
  const sec = `${seconds}` < 10 ? `0${seconds}` : `${seconds}`

  clock.textContent = `${hour}:${min}:${sec}`
}

getTime()

setInterval(() => {
  getTime()
}, 1000)
