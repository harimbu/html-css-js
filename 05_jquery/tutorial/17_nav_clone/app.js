$(function () {
  var headerClone = $('.header').contents().clone()
  var header2 = $('<header class="header2"></header>')

  header2.append(headerClone)
  header2.prependTo('section')

  var scrollValue = $('.header').outerHeight() + 100

  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= scrollValue) {
      header2.addClass('show')
      header2.find('img').attr('src', '../images/logo_s.svg')
    } else {
      header2.removeClass('show')
    }
  })
})
