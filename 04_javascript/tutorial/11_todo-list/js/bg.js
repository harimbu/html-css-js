const bg = document.querySelector('.bg')

function changeBg() {
  const num = Math.floor(Math.random() * 3) + 1
  bg.innerHTML = `<img src="./images/${num}.jpg">`
}

function init() {
  changeBg()
  setInterval(changeBg, 30000)
}

init()
