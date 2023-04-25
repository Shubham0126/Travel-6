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