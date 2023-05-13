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

/* fade */
// () 안에 fast, slow, number로 속도 조절
// $('.fade a').mouseenter(function () {
//   $('.fade .box').fadeIn('fast');
// });
// $('.fade a').mouseleave(function () {
//   $('.fade .box').fadeOut('slow');
// });
$('.fade a').click(function () {
  $('.fade .box').fadeToggle(1000);
});
