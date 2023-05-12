$(function () {
  $('p').css({ display: 'none' });
  $('.show').click(function () {
    // $('p').css({ display: 'block' });
    $('p').show();
  });
  $('.hide').click(function () {
    $('p').css({ display: 'none' });
  });
});
