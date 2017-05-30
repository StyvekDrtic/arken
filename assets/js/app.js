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

$(".outerSluzby li").click(function() {
  if ($(".sluzby").css("display") == "block") {
    $(".sluzby").css("display", "none");
  }

  else {
    $(".sluzby").css("display", "block");
  }
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-97878141-1', 'auto');
ga('send', 'pageview');


!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1555188471160377'); // Insert your pixel ID here.
fbq('track', 'PageView');
