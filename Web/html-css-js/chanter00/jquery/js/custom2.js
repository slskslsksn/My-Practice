/* show */
// $('.show a').mouseenter(function () {
//   $('.show .box').show();
// });

// $('.show a').mouseleave(function () {
//   $('.show .box').hide();
// });

$('.show a').click(function () {
  $('.show .box').toggle();
});

/* slide */
// $('.slide a').mouseenter(function () {
//   $('.slide .box').slideDown();
// });
// $('.slide a').mouseleave(function () {
//   $('.slide .box').slideUp();
// });
$('.slide a').click(function () {
  $('.slide .box').slideToggle();
});
