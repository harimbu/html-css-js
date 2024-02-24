//offset()
//scrollTop()

$(function () {
  var navOffsetValue = $('#nav').offset().top
  console.log(navOffsetValue)

  $(window).scroll(function () {
    var scrollTopValue = $(document).scrollTop()
    console.log(scrollTopValue)

    if (scrollTopValue > navOffsetValue) {
      $('#nav').addClass('fixed')
    } else {
      $('#nav').removeClass('fixed')
    }

    if (scrollTopValue > 800) {
      $('.go_top').fadeIn()
    } else {
      $('.go_top').fadeOut()
    }
  })

  $('.go_top').on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 'fast')
  })
})
