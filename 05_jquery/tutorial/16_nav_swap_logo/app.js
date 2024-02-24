$(function () {
  $(window).scroll(function () {
    function logoSwap(url) {
      $('.logo').find('img').attr('src', url)
    }

    if ($(window).scrollTop() > 500) {
      $('.nav').addClass('small')
      logoSwap('../images/logo_s.svg')
    } else {
      $('.nav').removeClass('small')
      logoSwap('../images/logo.svg')
    }
  })
})
