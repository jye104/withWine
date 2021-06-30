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
    spaceBetween: 8,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 8
      },
      1080: {
        slidesPerView: 3,
        spaceBetween: 3,
      }
    }
  });


  // #cnt3 hover, focus
    const $hoverLine = $('#hoverLine');
    // $('#cnt3 .atc_txt').on('mouseenter focusin', function(){
    //   $(this).append($hoverLine);
    //   $('#cnt3 .atc_txt').on('mouseleave', function(){
    //     $(this).children($hoverLine).remove();
    //   });
    // });
    $('#cnt3 .atc_txt').on({
      'mouseenter focus': function(){
        $(this).append($hoverLine);
      },
      'mouseleave blur': function(){
        $(this).find('svg').remove();
      }
    });


  // #cnt4 hover-finger
  const $btn_subSt = $('#cnt4 .btn_subscript');
  $btn_subSt.on('mouseenter focusin', function(){
    $(this).children().css({visibility: 'visible'}).animate({top: '70%', left: '50%'}, 400, function(){
      $(this).children('img').attr({src: 'images/icon/icon_finger_on.png'})
      $(this).parent('a').addClass('btn_subscript_on').removeClass('btn_subscript')
    });
    return false;
  });

  // #cnt4 slide
  let current = 0;
  $('#cnt4 .controller button').on('click', function(){
    const btnNum = $(this).index();
    // 1) .box가 현재 애니메이션 중이라면 강제 종료
    if ($('#cnt4 .box').is(':animated')) return false;

    // 2) if - 이전은 current 0, else if - 다음은 current가 maxStep
    if ((btnNum === 0 && current === 0) || (btnNum === 1 && current === 3)) return false;

    // 3-1) 이전버튼 클릭 (current 변수값을 1씩 감소) -> margin-left를 21.5vw로 애니메이트
    // 3-2) 다음버튼 클릭 제어(current를 1씩 증가) -> margin-left를 -12.5vw로 애니메이트
    if (btnNum === 0) {
      $('#cnt4 .box').eq(current).animate({marginLeft: '33vw'}, ariaHidden);
      current--;
      console.log(current);
    } else {
      current++;
      console.log(current);
      $('#cnt4 .box').eq(current).animate({marginLeft: '0vw'}, ariaHidden);
    }

    // 접근성 추가
    function ariaHidden() {
      // 1) 모든 li를 aria-hidden: true 속성 설정
      $('#cnt4 .box').attr('aria-hidden', true);

      // 2) 현재 화면에 보여지는 하나만 aria-hidden: false로 바꾸기
      $('#cnt4 .box').eq(current).attr('aria-hidden', false);
    }
    ariaHidden();
  });

});