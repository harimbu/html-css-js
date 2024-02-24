const weather = document.querySelector('.weather')
const API = '5a997933af8e2cea523de564d4ecac27'

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`)
    .then(function (response) {
      return response.json()
    })
    .then(function (json) {
      const name = json.name
      const temp = json.main.temp
      weather.innerText = `${temp}°C ${name}`
    })
}

function saveCoords(coords) {
  localStorage.setItem('coords', JSON.stringify(coords))
}

function geoSucces(position) {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude
  const coords = {
    latitude,
    longitude
  }
  saveCoords(coords)
  getWeather(latitude, longitude)
}

function geoError() {
  console.log('위치 정보를 허용하지 않았습니다.')
}

function askCoords() {
  navigator.geolocation.getCurrentPosition(geoSucces, geoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem('coords')
  if (loadedCoords === null) {
    askCoords()
  } else {
    const parsedCoords = JSON.parse(loadedCoords)
    getWeather(parsedCoords.latitude, parsedCoords.longitude)
  }
}

function init() {
  loadCoords()
}

init()
