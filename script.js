$(document).ready(function(){
    $(".toggle").click(function(){
        $(".menus .menu-item").show();
        $(".cross").show();
        $(".toggle").hide();
    });

    $(".cross").click(function(){
        $(".menus .menu-item").hide();
        $(".cross").hide();
        $(".toggle").show();

    });
        var owl = $('.owl-carousel');
        owl.owlCarousel({
          loop:true,
          dots:false,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          margin:10,
          nav:false,
          items: 1,
        });
    
    $('.right-arrow').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.left-arrow').click(function() {
        owl.trigger('prev.owl.carousel');
  });
});


