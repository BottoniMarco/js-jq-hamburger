var hm = $(".hamburger-menu");

var hamburgeIcon = $(".fas.fa-bars");

var chiudi = $(".close");

hamburgeIcon.click(
  function() {
    hm.show(200);
  }
);

chiudi.click(
  function() {
    hm.hide(200);
  }
);
