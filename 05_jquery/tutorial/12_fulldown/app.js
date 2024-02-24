$(function () {
  var header = $('.header')
  var gnb = header.find('.gnb')
  var dimm = $('.dimm')

  gnb.hover(
    function () {
      header.stop().animate({ height: 420 }, 'fast')
      dimm.addClass('on')
    },
    function () {
      header.stop().animate({ height: 80 }, 'fast')
      dimm.removeClass('on')
    }
  )

  gnb.find('ul').css('min-height', 420)
})

// $(function () {
//   var header = $('.header')
//   var gnb = header.find('.gnb')
//   var headerHeight = header.innerHeight()
//   var subMenuHeight = gnb.find('ul li').innerHeight()
//   var paddingValue = 40
//   var menuCount = []

//   gnb.find('ul').each(function () {
//     var liCount = $(this).find('li').length
//     menuCount.push(liCount)
//   })

//   var maxMeunCount = Math.max.apply(null, menuCount)

//   var autoHeight = subMenuHeight * maxMeunCount + headerHeight + paddingValue

//   header
//     .on('mouseover', function () {
//       header.stop().animate({ height: autoHeight }, 'fast')
//     })
//     .on('mouseleave', function () {
//       header.stop().animate({ height: headerHeight }, 'fast')
//     })

//   gnb.find('ul').css('min-height', autoHeight)
// })
