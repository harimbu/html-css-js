$(function () {
  var btns = $('.btns button')
  var item = $('.list li')

  btns.on('click', function (e) {
    btns.removeClass('active')
    $(this).addClass('active')

    var category = e.currentTarget.dataset.id
    if (category === 'all') {
      item.show()
    } else {
      // item.hide().filter(`[data-item = ${category}]`).show();
      item
        .hide()
        .filter('[data-item = ' + category + ']')
        .show()
    }
  })
})
