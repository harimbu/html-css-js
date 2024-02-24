$(function () {
  var list = $('.list')
  var btn = $('#btn')

  list.find('li').slice(0, 9).show()

  btn.click(function () {
    list.find('li:hidden').slice(0, 9).fadeIn()
    if (list.find('li:hidden').length <= 0) {
      btn.hide()
    }
  })

  // btn.on('click', function () {
  //   list.find('li:hidden').slice(0, 9).fadeIn()
  //   if (list.find('li:hidden').length <= 0) btn.hide()
  // })
})
