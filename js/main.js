$(document).ready(function () {
  // #cnt1 mouse effect
  $('#cnt1 .photo_box').on('mousemove', function (e) {
    const cntX = $(this).width() / 2 + $(this).offset().left;
    const cntY = $(this).height() / 2 + $(this).offset().top;
    const translateX = (e.offsetX - cntX) / 30;
    const translateY = (e.offsetY - cntY) / 30;
    gsap.to('.photo img', {xPercent: translateX, yPercent: translateY});

/*      $(this).find('.photo img').attr({
      style: 'transform:translate(' + translateX + 'px, ' + translateY + 'px)'
    });  , duration: 0.3, delay: 0.1*/
  });

  // #cnt2 swiper
  const swiper = new Swiper('#cnt2 .swiper-container', {
    loop: true,
    effect: 'slide', //,'coverflow'
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 0,
    // Responsive breakpoints

  });

  // #cnt3 hover, focus
  const $hoverLine = $('#hoverLine');
  let timer = 0;
  $(window).on('resize', function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if ($(this).width() > 1080) {
        // #cnt3 hover-finger
        const $btn_subSt = $('#cnt3 .btn_subscript');
        $btn_subSt.on('mouseenter focusin', function () {
          $(this).children().css({visibility: 'visible'}).animate({top: '70%',left: '50%'}, 400, function () {
            $(this).children('img').attr({src: 'images/icon/icon_finger_on.png'});
            $(this).parent('a').addClass('btn_subscript_on').removeClass('btn_subscript');
          });
          return false;
        });

        let current = 0;
        $('#cnt3 .controller button').on('click', function () {
          const btnNum = $(this).index();
          // 1) .box가 현재 애니메이션 중이라면 강제 종료
          if ($('#cnt3 .box').is(':animated')) return false;

          // 2) if - 이전은 current 0, else if - 다음은 current가 maxStep
          if ((btnNum === 0 && current === 0) || (btnNum === 1 && current === 3)) return false;

          // 3-1) 이전버튼 클릭 (current 변수값을 1씩 감소) -> margin-left를 21.5vw로 애니메이트
          // 3-2) 다음버튼 클릭 제어(current를 1씩 증가) -> margin-left를 -12.5vw로 애니메이트
          if (btnNum === 0) {
            $('#cnt3 .box').eq(current).animate({
              marginLeft: '38vw'
            }, ariaHidden);
            current--;
            console.log(current);
          } else {
            current++;
            console.log(current);
            $('#cnt3 .box').eq(current).animate({
              marginLeft: '0vw'
            }, ariaHidden);
          }

          // 접근성 추가
          function ariaHidden() {
            // 1) 모든 li를 aria-hidden: true 속성 설정
            $('#cnt4 .box').attr('aria-hidden', true);

            // 2) 현재 화면에 보여지는 하나만 aria-hidden: false로 바꾸기
            $('#cnt3 .box').eq(current).attr('aria-hidden', false);
          }
          ariaHidden();
        });
      }
    }, 100);
  });
  $(window).trigger('resize');

  // 작은 사이즈에서 효과 없애기
  let timers = 0;
  $(window).on('resize', function () {
    clearTimeout(timers);
    timers = setTimeout(function () {
      let current = 0;
      if ($(this).width() <= 480) {
        $('#cnt3 .controller button').on('click', function () {
          const btnNum = $(this).index();
          if ($('#cnt3 .box').is(':animated')) return false;

          if ((btnNum === 0 && current === 0) || (btnNum === 1 && current === 3)) return false;
          if (btnNum === 0) {
            $('#cnt3 .box').eq(current).animate({
              marginLeft: '50vw'
            }, ariaHidden);
            current--;
            console.log(current);
          } else {
            current++;
            console.log(current);
            $('#cnt3 .box').eq(current).animate({
              marginLeft: '-30vw'
            }, ariaHidden);
          }
        });
      }
      else if ($(this).width() <= 1080) {
        $('#cnt3 .controller button').on('click', function () {
          const btnNum = $(this).index();
          if ($('#cnt3 .box').is(':animated')) return false;

          if ((btnNum === 0 && current === 0) || (btnNum === 1 && current === 3)) return false;
          if (btnNum === 0) {
            $('#cnt3 .box').eq(current).animate({
              marginLeft: '38vw'
            }, ariaHidden);
            current--;
            console.log(current);
          } else {
            current++;
            console.log(current);
            $('#cnt3 .box').eq(current).animate({
              marginLeft: '-17vw'
            }, ariaHidden);
          }

          // 접근성 추가
        });
      }
      
      function ariaHidden() {
        // 1) 모든 li를 aria-hidden: true 속성 설정
        $('#cnt4 .box').attr('aria-hidden', true);

        // 2) 현재 화면에 보여지는 하나만 aria-hidden: false로 바꾸기
        $('#cnt4 .box').eq(current).attr('aria-hidden', false);
      }
      ariaHidden();
    }, 100);
  });
  $(window).trigger('resize');


});