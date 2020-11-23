var hm = $("#hamburger-menu");

var chiudi = $("#close");

hm.click(
  function() {
    $("ul").show(200);
  }
);

chiudi.click(
  function() {
    $("ul").hide(200);
  }
);
