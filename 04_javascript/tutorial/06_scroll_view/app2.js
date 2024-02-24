const movie = document.querySelector('.movie')

window.addEventListener('scroll', () => {
  const value = window.scrollY
  console.log(value)
  movie.style.clipPath = `circle(${value + 50}px at center center)`
})
