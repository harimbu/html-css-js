$(function () {
  $('.slide_01').slick({
    dots: true,
    prevArrow: $('.xi-angle-left-thin'),
    nextArrow: $('.xi-angle-right-thin'),
  })

  $('.slide_02').slick({
    dots: true,
    slidesToShow: 6,
    infinite: false,
    swipeToSlide: true,
  })

  var swiper = new Swiper('.swiper_01', {
    slidesPerView: 6,
    spaceBetween: 20,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

  var swiper2 = new Swiper('.swiper_02', {
    slidesPerView: 6,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      // type: 'fraction',
    },
  })
})
