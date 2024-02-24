$(function () {
  var slider = $('.slider')
  var slideContainer = slider.find('.slides')
  var slides = slideContainer.find('.slide')
  var currentIndex = 0
  var interval = 2000
  var timer
  // console.log(slides);

  $(slides[currentIndex]).fadeIn()
  // setInterval(func, time)

  function fadeStart() {
    timer = setInterval(function () {
      var nextIndex = (currentIndex + 1) % slides.length
      $(slides[currentIndex]).fadeOut()
      $(slides[nextIndex]).fadeIn()
      currentIndex = nextIndex
    }, interval)
  }

  function fadeStop() {
    clearInterval(timer)
  }

  slides.on('mouseover', fadeStop).on('mouseleave', fadeStart)

  fadeStart()
})
