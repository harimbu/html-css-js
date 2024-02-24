$(function () {
  var slider = $('.slider')
  var slide = $('.slide')
  var item = $('.item')
  var interval = 3000
  var width = 800
  var speed = 1000
  var currentSlide = 1
  var timer

  function slideStart() {
    timer = setInterval(() => {
      slide.animate({ marginLeft: '-=' + width + 'px' }, speed, () => {
        currentSlide++
        if (currentSlide === item.length) {
          currentSlide = 1
          slide.css('marginLeft', 0)
        }
      })
    }, interval)
  }

  function slideStop() {
    clearInterval(timer)
  }

  function init() {
    item.each(index => {
      console.log(index)
      $(item[index]).css('left', index * width + 'px')
    })
    slider.hover(slideStop, slideStart)
    slideStart()
  }

  init()
})
