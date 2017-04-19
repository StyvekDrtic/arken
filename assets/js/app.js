$(".otevritMenu").click(function() {
  $(".mobilniMenu").css("display", "block");
  $("section").css("-webkit-filter", "blur(3px)");
  $("section").css("-o-filter", "blur(3px)");
  $("section").css("filter", "blur(3px)");
  $("footer").css("-webkit-filter", "blur(3px)");
  $("footer").css("-o-filter", "blur(3px)");
  $("footer").css("filter", "blur(3px)");
  $(".mobilniMenu").removeClass("animated fadeOutUp");
  $(".mobilniMenu").addClass('animated fadeInDown');
});

$(".zavrit").click(function() {
  $(".mobilniMenu").removeClass("animated fadeInDown");
  $(".mobilniMenu").addClass('animated fadeOutUp');
  $("section").css("-webkit-filter", "blur(0px)");
  $("section").css("-o-filter", "blur(0px)");
  $("section").css("filter", "blur(0px)");
  $("footer").css("-webkit-filter", "blur(0px)");
  $("footer").css("-o-filter", "blur(0px)");
  $("footer").css("filter", "blur(0px)");

  setTimeout(function () {
    $(".mobilniMenu").css("display", "none");
    $(".mobilniMenu").removeClass("animated fadeOutUp");
  }, 1000);
});
