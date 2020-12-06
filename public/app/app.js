// import * as MODEL from "../model/model.js";

function initListeners() {
  $("#nav nav a").click(function (e) {
    var btnID = this.id;
    console.log(btnID);
    MODEL.getView(btnID);
  });
}

function initSite() {
  $.get("views/nav.html", function (nav) {
    $("#nav").html(nav);
    initListeners();
  });

  $.get("views/home.html", function (data) {
    $("#app").html(data);
  });

  $.get("views/footer.html", function (data) {
    $("#footer").html(data);
  });

  // $.get("views/yourrecipespagetwo.html", function (data) {
  //   $(".viewRecipe").html(data);
  // });

  $(".navicon").click(function (e) {
    $("nav").toggleClass("navMobileView");
    $(".links").addClass("linksMobileView");
    $(".links").toggle(function (e) {
      $("a").css({ display: "flex" });
    });
  });
}

$(document).ready(function () {
  initSite();
});
