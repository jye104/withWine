$(document).ready(function () {
  // pcHeader.on
  $(window).on('scroll', function(){
    if ($(this).scrollTop()>10) $('#pcHeader').removeClass('on').addClass('beige');
    else $('#pcHeader').addClass('on').removeClass('beige');
  });

  // pcGnb
  const $gnb = $('#gnb > ul');
  const $gnbD2 = $gnb.find('li ul');
  $gnbD2.hide();

  $gnb.children().on('mouseenter focusin', function(){
    $(this).addClass('on').siblings('li.on').removeClass('on');
    $('#pcHeader').addClass('active');
    $gnbD2.stop().slideDown();
   });
  $gnb.on('mouseleave', function(){
    $(this).children().removeClass('on').children('ul').stop().slideUp('fast', function(){
      $('#pcHeader').removeClass('active').find('#gnb').removeClass('on');
    });
  });


  // cnt2 swiper
  const swiper = new Swiper('#cnt2 .swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 10
      }
    }
  });
});