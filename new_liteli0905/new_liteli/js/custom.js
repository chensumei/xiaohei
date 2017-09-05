$(document).ready(function() {
    //four slide
    $(".four-slide").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,    
      transitionStyle:"fade",
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      stopOnHover: true

    });
    //three slide
    $(".three-slide").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,    
      transitionStyle:"fade",
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]

    });
    //six slide
    $(".six-slide").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 1,    
      nav : true,
      transitionStyle:"fade",
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1]

    });
    
    //smooth scroll
    $(function() {
      $('.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 800);
            return false;
          }
        }
      });
    });
});    