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

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-97878141-1', 'auto');
ga('send', 'pageview');
