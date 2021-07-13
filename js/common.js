$(document).ready(function () {
  // pcHeader.on
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) $('#pcHeader').removeClass('on').addClass('beige');
    else $('#pcHeader').addClass('on').removeClass('beige');
  });
  // mHeader.on
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 10) $('#mHeader').addClass('beige');
    else $('#pcHeader').removeClass('beige');
  });
  // pcGnb
  const $gnb = $('#pcGnb > ul');
  const $gnbD2 = $gnb.find('li ul');
  const $gnbD2a = $gnb.find('li ul li a');
  $gnbD2.hide();
  $gnb.children().on('mouseenter focusin', function () {
    $(this).addClass('on').siblings('li.on').removeClass('on');
    $('#pcHeader').addClass('active');
    $gnbD2.stop().slideDown();
  });
  $gnb.on('mouseleave', function () {
    $(this).children().removeClass('on').children('ul').stop().slideUp('fast', function () {
      $('#pcHeader').removeClass('active').find('#gnb').removeClass('on');
    });
  });

  // mGnb
  $('#mGnb ul li a').on('click', function () {
    if ($(this).next().length === 0) {
      return true;
    } else {
      const liHei = $(this).next().children().outerHeight(true);
      const liSize = $(this).next().children().length;
      const ulHei = liHei * liSize;

      $(this).parent().siblings().removeClass('on').children('ul').stop().animate({
        maxHeight: 0
      }, function () {
        $(this).css({
          visibility: 'hidden'
        });
      });

      if ($(this).parent().hasClass('on')) {
        $(this).next().animate({
          maxHeight: 0
        }, function () {
          $(this).css({
            visibility: 'hidden'
          });
        }).parent().removeClass('on');
      } else {
        $(this).next().css('visibility', 'visible').stop().animate({
          maxHeight: ulHei
        }).parent().addClass('on');
      }
    }
    return false;
  });
  const $mGnb = $('#mHeader #mGnb');
  $('#mHeader .btn_gnb_open').on('click', function () {
    const $first = $mGnb.find('.first');
    const $last = $mGnb.find('.last');
    const $openBtn = $(this);
    $mGnb.css('visibility', 'visible').stop().animate({
      left: 0
    }, 300, function () {
      $first.focus();
      $('html').css({
        overflowY: 'hidden',
        height: '100%'
      });
    });
    $first.on('keydown', function (e) {
      if (e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        $last.focus();
      }
    })

    $last.on('keydown', function (e) {
      if (!e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        $first.focus();
      }
    });

    $mGnb.find('.btn_gnb_close').on('click', function () {
      $('#mgnbDim').stop().fadeOut('fast', function () {
        $(this).remove();
      });

      $mGnb.stop().animate({
        left: '100%'
      }, 300, function () {
        $(this).css('visibility', 'hidden');
        $openBtn.focus();

        $('#mGnb ul li.on').removeClass('on').children('ul').css({
          visibility: 'hidden',
          maxHeight: 0
        });
      });
    });
  });

  // dep2 a:hover, a:focus 제어
  const $gnbLine = $('#gnbLine');
  $gnbD2a.on('mouseenter focusin', function () {
    $(this).after($gnbLine);
  });
  $gnbD2a.on('mouseleave', function () {
    $(this).siblings($gnbLine).remove();
  });
  // gnb키보드 제어
  $gnb.find('a').first().on('keydown', function (e) {
    if ((e.shiftKey || e.keyCode === 16) && e.keyCode === 9) $gnb.trigger('mouseleave');
  });
  $gnb.find('a').last().on('keydown', function (e) {
    if ((!e.shiftKey || e.keyCode !== 16) && e.keyCode === 9) $gnb.trigger('mouseleave');
  });


  // fade 효과
  $(window).on('scroll', function () {
    var scrollY = $(this).scrollTop() + $(this).height() * 2 / 3;
    //console.log(scrollY);

    $('.fade').each(function (idx) {
      if (scrollY > $(this).offset().top) {
        $(this).addClass('on');
      } else { //반복적인 효과가 필요한 경우만 사용하기
        $(this).removeClass('on');
      }
    });
  });

  $(window).trigger('scroll');

  $(".btn_top").on("click", function () {
    $("html, body").stop().animate({
      scrollTop: 0
    });
    return false;
  });

});