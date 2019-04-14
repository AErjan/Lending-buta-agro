$(document).ready(function() {
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
    $page.animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top,
      },
      700,
    );
    return false;
  });

  $('.main-nav__btn').on('click', function() {
    $('.main-nav__list').toggleClass('main-nav__active');
  });
});
