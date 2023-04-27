$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
       
        $('.navbar').addClass('bg-dark')
    } else {
        $('.navbar').removeClass('bg-dark')
        $('.navbar').addClass('navbar-dark')

    }
  });

  var mq = window.matchMedia( "(max-width: 998px)" );
if (mq.matches) {
  $('.navbar').addClass('bg-dark');
  $('.navbar').addClass('navbar-dark')
}
else {
  $('.navbar').removeClass('bg-dark')
}

$(".place-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1500,
  margin: 30,
  dots: true,
  loop: true,
  center: true,
  responsive: {
      0:{
          items:1
      },
      576:{
          items:1
      },
      768:{
          items:2
      },
      992:{
          items:3
      }
  }
});