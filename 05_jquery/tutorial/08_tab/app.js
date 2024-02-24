$(function () {
  var item = $('.tab li')
  var content = $('.content')

  item.eq(0).find('a').addClass('active')
  content.hide().eq(0).show()

  item.click(function () {
    item.find('a').removeClass('active')
    $(this).find('a').addClass('active')

    content.hide()

    var activeIndex = $(this).index()
    // console.log(activeIndex);
    content.eq(activeIndex).show()
  })
})

$(function () {
  var item = $('.tab li')
  var content = $('.tab_content')

  item.eq(0).addClass('active')
  content.hide().eq(0).show()

  item.click(function () {
    item.removeClass('active')
    $(this).addClass('active')

    content.hide()

    var activeTab = $(this).find('a').attr('href')
    $(activeTab).fadeIn()
  })
})

// $(function () {
//   $("#tab").tabs({
//     show: { effect: "slide", duration: 400 },
//   });

//   var item = $(".tab li");

//   item.click(function () {
//     item.removeClass("active");
//     $(this).addClass("active");
//   });
// });
