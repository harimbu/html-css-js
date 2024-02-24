// addClass('active')
// removeClase('active')
// toggleClass('active')
// A.attr('x', 'y') -- 속성값을 변경
// var x = A.attr('src')
// hasClass('active')

$(function () {
  $(".btn").click(function () {
    $(".side").toggleClass("active");

    if ($(".side").hasClass("active")) {
      $(this).find("img").attr("src", "./images/close.png");
    } else {
      $(this).find("img").attr("src", "./images/open.png");
    }
  });
});
