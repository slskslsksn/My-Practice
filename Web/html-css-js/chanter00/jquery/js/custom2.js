// $('.slide a').mouseenter(function () {
//   $('.slide .box').slideDown();
// });
// $('.slide a').mouseleave(function () {
//   $('.slide .box').slideUp();
// });
$('.slide a').click(function () {
  $('.slide .box').slideToggle();
});
