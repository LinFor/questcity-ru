



$(document).ready(function(){







$( "a.zapiska.fancy" ).each(function( index ) {
  //console.log( $(this).html());
if(  $(this).html()=='23:59')
$(this).html('00:00');

});

//слайдер 

$('.slider').hover(
function(){
   $(this).slick('slickPause');
},
function(){
  $(this).slick('slickPlay');
});
  $('.slider').slick({
    dots: true,
    
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    autoplay: true,
    autoplaySpeed: 3000, 
arrows: false,
   // prevArrow: '<a  class="slick-prev" style=" cursor:pointer;  position: absolute;    top: 130px; left: 15px;   z-index: 1;    height: 100px;    width: 45px;"></a>',
//nextArrow: '<a  class="slick-next" style="  cursor:pointer;  position: absolute;    top: 130px; right: 15px;   z-index: 1;    height: 100px;    width: 45px;"></a>'

  });
$("textarea").keyup(function() {
    if (this.value.length > 10)
        this.value = this.value.substr(0, 10);
});



/********************/

$('#contacts .search-us p a').click(function(){
  //return false;
});

$('img.logo').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 400);
  return false;
});

$('.scroll').click(function() {
  $('body,html').animate({scrollTop:620},400);
});

$(window).on('load', function() {
  $(window).scrollTop(0);
});

/***************************/

$(".video").colorbox({iframe:true, innerWidth:640, innerHeight:390});
$(".game").colorbox({inline:true, width:"400px"});
//$(".order-sert").colorbox({inline:true, width:"400px"});


/**************************/

//заказ игры

// $(".raspisanie .time .hours div:not('.disabled')").click(function () { 
//   var game_time = $(this).text();//получаем время игры
//   var game_date = $(this).parents('.hours').siblings('.big').find('span').text();
//   var game_title = $(this).parents('.quest').find('.quest-head').find('h2').text();
//   var count = 'не указано';
  
//   $("a.game").trigger('click');
//   $('#inline_content input.hidden-field').val('Игра - ' + game_title 
//     +', дата проведения - ' + game_date + ', время проведения - '+ game_time
//     + ', количество игроков - ' + count);
//   $('input:radio.count').on('change', function () {
//     var count = $('input.count:checked').val();
//     $('#inline_content input.hidden-field').val('Игра - ' + game_title 
//     +', дата проведения - ' + game_date + ', время проведения - '+ game_time
//     + ', количество игроков - ' + count);
//   });
//   var date2 = $(this).parents('.time').find('.big').text();
  
//   $('#inline_content h5').html(date2 + ', <br> '+ game_time);
// });
      



/**************************************/

//сворачивание/разворачивание расписания

function scrollTo(a){
    var tag2 = $(a);
    var tagPo2s = tag2.offset().top - 200 + 'px';
    $("html, body").animate({scrollTop: tagPos2},'slow');
  }
        //прокрутка в нужное место при клике

 $('.order-game.t0').each(function(){
    $(this).click(function(){
      
      $('.block-slidetoggle.t0').slideDown();
      $('.raspisanie.t0').animate({
            height:"930"
          }, 0 );
      $('span.slideToggle.t0').css({'opacity':'1'});
      $('span.razvernut.t0').show();
      $('span.svernut.t0').hide();
      scrollTo($(this).attr('href'));
    });
  });

        //прокрутка в нужное место при клике

 $('.order-game.t1').each(function(){
    $(this).click(function(){
      
      console.log('1');
      $('.block-slidetoggle.t1 ').slideDown();
      $('.raspisanie.t1').animate({
            height:"930"
          }, 0 );
      $('span.slideToggle.t1').css({'opacity':'1'});
      $('span.razvernut.t1').show();
      $('span.svernut.t1').hide();
      scrollTo($(this).attr('href'));
    });
  });





$('span.razvernut.t1').click(function(){
  $('.raspisanie.t1').animate({
        height:"1830"
      }, 0 );
  $(this).hide();
  $('span.svernut.t1').show();
});


$('span.svernut.t1').click(function(){
  $('.raspisanie.t1').animate({
        height:"930"
      }, 0 );
  $(this).hide();
  $('span.razvernut.t1').show();$('body,html').animate({scrollTop:1580},400);
  //$('body,html').animate({scrollTop:1580},400);
});


$('span.razvernut.t0').click(function(){
  $('.raspisanie.t0').animate({
        height:"1830"
      }, 0 );
  $(this).hide();
  $('span.svernut.t0').show();
});


$('span.svernut.t0').click(function(){
  $('.raspisanie.t0').animate({
        height:"930"
      }, 0 );
  $(this).hide();
  $('span.razvernut.t0').show();$('body,html').animate({scrollTop:1580},400);
  //$('body,html').animate({scrollTop:1580},400);
});




$('span.zakryt').click(function(){
  $('.block-slidetoggle').hide();
  $('.raspisanie').animate({
        height:"0"
      }, 0 );
  $('span.slideToggle').css({'opacity':'0'});
 // $('body,html').animate({scrollTop:620},400);
});

$('span.topzakryt').click(function(){
  $('.block-slidetoggle').hide();
  $('.raspisanie').animate({
        height:"0"
      }, 0 );
  $('span.slideToggle').css({'opacity':'0'});
//  $('body,html').animate({scrollTop:620},400);
});


/****************************/

//бронирование
$('.raspisanie .time .hours div span.disabled').parents('.hours div').addClass('disabled');
$(".raspisanie .time .hours div span.disabled").click(function () {
  return false;
});


/*******************************************/

//добавление блока с ценами после дня

  $('.raspisanie .time .big').each(function(i){
   var big_text = $(this).text();
   var check1 = big_text.indexOf('Суббота');
   var check2 = big_text.indexOf('Воскресенье');

   var budni = "<div class='clear'></div><div class='price'><div class='first'>&nbsp;</div><div class='second'>800 000 р.</div><div class='third'>&nbsp;</div><div class='six'>&nbsp;</div><div class='five'>800 000 р.</div><div class='fourth'>&nbsp;</div></div>";
   var week_end = "<div class='clear'></div><div class='price'><div class='seven'>&nbsp;</div><div class='eight'>800 000 р.</div><div class='nine'>&nbsp;</div></div>";
   if((check1 !== -1) || (check2 !== -1))
       {
       //  $(this).parents('.time').append(week_end);
       }         
    else
      {
     //   $(this).parents('.time').append(budni);
      }
  });





/**********меню***************/


  function scrollTo(a){
    var tag = $(a);
    var tagPos = tag.offset().top - 145 + 'px';
    $("html, body").animate({scrollTop: tagPos},'slow');
  }
        //прокрутка в нужное место при клике

  $('.active-menu .navlink').each(function(){
    $(this).click(function(){
      scrollTo($(this).attr('href'));
    });
  });



  $('.header a.order').click(function(){
    
   /*$('.block-slidetoggle').slideDown();
   $('.raspisanie').animate({
          height:"960"
        }, 0 );
   $('span.slideToggle').css({'opacity':'1'});
   $('span.razvernut').show();
   $('span.svernut').hide();*/
   $("a#kluv").trigger('click');
   //$("html, body").animate({scrollTo($('.header a.order').attr('href'))},'slow');
   //$('body,html').animate({scrollTop:1190},400);
  });




 
//Автоматическое изменение класса у li  при скролле

(function ($) {
  "use strict";

  var menus = [];
  var wnd   = $(window);

  function detectMenuItem (items, ofs) {
    var k     = items.length;
    var left  = 0;
    var right = k - 1;

    while (left <= right) {
      var middle    = left + ((right - left) / 2 | 0);
      var middleVal = items[middle].target.offset().top -150;

      if (ofs < middleVal) {
        right = middle - 1;
      } else if (ofs > middleVal) {
        left = middle + 1;
      } else {
        return middle;
      }
    } // .while

    return right < 0 ? 0 : right;
  } // .function detectMenuItem

  function updateMenus () {
    var ofs = wnd.scrollTop();

    for (var i = 0, k = menus.length; i < k; i++) {
      var menu  = menus[i];
      var items = menu.items;

      if (items.length) {
        var activeItem = items[detectMenuItem(items, ofs)];
        menu.children.removeClass('active');
        activeItem.elem.addClass('active');
      }
    }
  } // .function updateMenus

  $(function () {
    $('ul.active-menu').each(function () {
      var self     = $(this);
      var children = self.children('li');
      var items    = [];

      for (var i = 0, k = children.length; i < k; i++) {
        var elem   = $(children[i]);
        var target = $('#' + elem.data('target'));
        items.push( { elem: elem, target: target  } );
      }

      items.sort(function (a, b) {
        var ofsA = a.target.offset().top;
        var ofsB = b.target.offset().top;
        return ofsA > ofsB ? +1 : (ofsA < ofsB ? -1 : 0);
      });

      menus.push( { menu: self, items: items, children: children } );
    }); // each ul.active-menu

    wnd.scroll(updateMenus);
    updateMenus();
  }); // on dom ready
})(jQuery);








/**************************/

//форма

$(function($){

var options =  {
  onChange: function(cep) {
    console.log('CEP Completed!:' + cep);
  }
};


  //$("input.phone").mask("+375 (99) 999-99-99", options);
});

$('a.order-sert').click(function(){
  //$('p.valWarning').hide();
});
$('.raspisanie .time .hours div').click(function(){
 // $('p.valWarning').hide();
});

function isNotMax(e){
  e = e || window.event;
  var target = e.target || e.srcElement;
  var code=e.keyCode?e.keyCode:(e.which?e.which:e.charCode)

  switch (code){
    case 13:
    case 8:
    case 9:
    case 46:
    case 37:
    case 38:
    case 39:
    case 40:
      return true;
  }
  return target.value.length <= target.getAttribute('maxlength');
}

$('textarea').attr({'maxlength':50});
$('textarea').keypress(function(event){
  return isNotMax(event);  
});








$("#inline_content_sert .send").on("click", function(){
  return sendIt2($(this));
});
function checkIt2(el) {
  var vTemp = true;
  el.parent().find("input").each(function () {
      if (!$(this).hasClass("noValidate")) {
        if ($.trim($(this).val()) == "") {
            $(this).css("background-color", "red");
            vTemp = false;
        }
      }
  });

  if(!/^\+375 \((44|29|33|25)\) \d\d\d-\d\d-\d\d$/.test($("#inline_content_sert input.phone").val())){
    $("#inline_content_sert input.phone").css("background-color", "red");
    vTemp = false;
  }

  return vTemp;
}
function sendIt2(el) {
    var form = el.parent().serialize();
    if(checkIt2(el)){
        $.ajax({
          type: 'POST',
          url: 'http://questcity.by/bitrix/templates/questcity/js/rest.php',
          data: form,
          success: function(data) {
              setTimeout(function(){jQuery.colorbox.close()}, 100);
              $('form input[type=text]').val('');
              $('form input[type=text]').css("background-color", "white");
              $('form textarea').val('');
              $("p.sendok").fadeIn();
          },
          error: function(xhr, str){
              alert("Error: "+ xhr.responseCode);
          }
        }); return true;
    } else {
        $(".valWarning").fadeIn();
        $(".valWarning").fadeOut(2000);
        return false;
    }
}/***************/








$("form input.name").change(function(){
  if ($(this).val() == '') {
    $(this).css("background-color", "red");
  }
  else{
    $(this).css("background-color", "white");
  }
});



$("form input.phone").change(function(){
  if ($(this).val() == '') {
    $(this).css("background-color", "red");
  }
  else{
    $(this).css("background-color", "white");
  }
});

$('input[type=radio]').change(function(){
  $('form p.count').removeClass('novalid');
});

$('body').click(function(){
  $("p.sendok").fadeOut(2000);
});


var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
$("form input.email").blur(function(){
  var r = $("form input.email").val();
  if (!reg.test(r)) {
    $(this).css("background-color", "red");
  }
  else{
    $(this).css("background-color", "white");
  }
});


$("#inline_content .send").on("click", function(){
  return sendIt($(this));
  });
});



function checkIt(el) {
  var vTemp = true;
    
  el.parent().find("input").each(function () {
      if (!$(this).hasClass("noValidate")) {
        if ($.trim($(this).val()) == "") {
            $(this).css("background-color", "red");
            vTemp = false;
        }
      }
  });

  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;
  var r = $("form input.email").val();
  if (!reg.test(r)) {
    $("form input.email").css("background-color", "red");
    vTemp = false;
  }

  if($('input[type="radio"]:checked').length === 0) {
    $('form p.count').addClass('novalid');
    vTemp = false;
  }



  if(!/^\+375 \((44|29|33|25)\) \d\d\d-\d\d-\d\d$/.test($("#inline_content input.phone").val())){
    $("#inline_content input.phone").css("background-color", "red");
    vTemp = false;
  }

  return vTemp;

}








function sendIt(el) {
    var form = el.parent().serialize();
    if(checkIt(el)){
        $.ajax({
          type: 'POST',
          url: 'http://questcity.by/bitrix/templates/questcity/js/rest.php',
          data: form,
          success: function(data) {
              setTimeout(function(){jQuery.colorbox.close()}, 100);
              $('form input[type=text]').val('');
              $('form input[type=text]').css("background-color", "white");
              $('form textarea').val('');
              $("p.sendok").fadeIn();
          },
          error: function(xhr, str){
              alert("Error: "+ xhr.responseCode);
          }
        }); return true;
    } else {
        $(".valWarning").fadeIn();
        $(".valWarning").fadeOut(2000);
        return false;
    }
}















          

/******************************************************/


