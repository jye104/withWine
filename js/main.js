$(document).ready(function() {
  // #cnt1 mouse effect
  $('.move_box_wrap').on('mousemove', function(e){
    const cntX = $(this).width()/2 + $(this).offset().left;
    const cntY = $(this).height()/2 + $(this).offset().top;
    const translateX = (e.offsetX - cntX) / 7;
    const translateY = (e.offsetY - cntY) / 7;
    
    $(this).find('.photo img').attr({style: 'transform:translate(' + translateX + 'px, ' + translateY + 'px)'});
  });


  // #cnt2 swiper
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


  // #cnt4 hover-finger
  $('#cnt4 .btn_more_bk').on('mouseenter focusin', function(){
    $(this).children().animate({top: '70%', left: '50%'}, 400, function(){
      $(this).children('img').attr('src', 'images/icon/icon_finger_on.png');
      $('#cnt4 .btn_more_bk').css('background', '../images/icon/btn_red_on.png')
    });
    return false;
  });

  // #cnt4 slide
  $('.button-prev').on('click', function(){

  });

});