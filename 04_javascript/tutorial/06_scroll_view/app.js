const section = document.querySelector('section')
const title = document.querySelector('.title')

window.addEventListener('scroll', function () {
  let value = window.scrollY
  section.style.clipPath = `circle(${value}px at center center)`
})
