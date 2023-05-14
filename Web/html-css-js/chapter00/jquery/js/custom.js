// $(function () {
//   $('p').css({ display: 'none' });
// $('.show').click(function () {
//   // $('p').css({ display: 'block' });
//   $('p').show();
// });
//   $('.hide').click(function () {
//     $('p').css({ display: 'none' });
//   });
// });

$(function () {
  const div = 'div';
  const show = '.show';
  const hide = '.hide';
  // 클릭시 이벤트
  // $(show).click(function () {
  //   $(div).show();
  // });
  // $(hide).click(function () {
  //   $(div).hide();
  // });

  // enter, leave
  $(show).mouseenter(function () {
    $(div).show();
  });
  // $(show).mouseleave(function () {
  //   $(div).hide();
  // });
  $(hide).mouseenter(function () {
    $(div).hide();
  });
  // $(hide).mouseleave(function () {
  //   $(div).show();
  // });
});
