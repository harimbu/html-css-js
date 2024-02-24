// $(function () {
//   var title = $('.accordion h2')
//   var content = $('.content')

//   title.eq(0).addClass('active')
//   content.hide().eq(0).show()

//   title.click(function () {
//     $(this).toggleClass('active')
//     $(this).next().slideToggle()
//   })
// })

$(function () {
  var title = $('.accordion h2')
  title.eq(0).addClass('active').next().slideDown()

  title.click(function () {
    var content = $(this).next()
    $(this).parent('.accordion').find('p').not(content).slideUp()
    content.slideToggle()

    // if ($(this).hasClass('active')) {
    //   $(this).removeClass('active')
    // } else {
    //   $(this).parent('.accordion').find('h2').removeClass('active')
    //   $(this).addClass('active')
    // }
  })
})

// $(function () {
//   $('#accordion').accordion({
//     animate: 300
//   })
// })
