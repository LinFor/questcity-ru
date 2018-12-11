$(document).ready(function() {
  
  // Burger 
  
  $('.burger-wrap').click(function(){
    $(this).children().toggleClass('active');
    $('.nav').toggleClass('active');
    return false;
  });
  
  // Reviews slider
  
  $('.reviews-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  
  // Footer slider
  
  $('.slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

  centerMode: true,
  centerPadding: '0px',
     responsive: [
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      },
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  
  // Fancybox
  
  $('[data-fancybox]').fancybox();
  
  // Smoth scrolling
  
  function scroll_to() {
    $(".nav li a, .sentence-link, .link").click(function() {

      
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 1000
      });
      
      $('.burger-wrap').children().removeClass('active');
      $('.nav').removeClass('active');
      
      return false;
    });
  }

  scroll_to();
  
  $(window).scroll(function() {
    
    var window_top = $(window).scrollTop();
    
    $('.nav li a').each(function() {
      var href = $(this).attr('href');
      var el_top = $(href).offset().top;
      var el_bot = el_top + $(href).outerHeight();
      
      if (window_top >= el_top && window_top < el_bot) {
        $(this).parent().addClass('active');
      }
      else {
        $(this).parent().removeClass('active');
      }
    });
    
  });
 
  
});





