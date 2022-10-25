import Multiselect from "./combobox.js";

$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".header-logo").toggleClass("toggle");
    $(".menu-text").toggleClass("toggle");
    $(".left-container").toggleClass("toggle");
  });

  // close dialog
  $(".close--dialog").click(function () {
    $(".dialog").addClass("hide-dialog");
    $(".add__employee--dialog").addClass("hide-dialog");
    $(".edit__employee--dialog").addClass("hide-dialog");
  });

  $(".btn__close--dialog").click(function () {
    $(".dialog").addClass("hide-dialog");
    $(".add__employee--dialog").addClass("hide-dialog");
    $(".edit__employee--dialog").addClass("hide-dialog");
  });

  // show dialog add employee
  $(".btn-add").click(function () {
    $(".dialog").removeClass("hide-dialog");
    $(".add__employee--dialog").removeClass("hide-dialog");
    $(".edit__employee--dialog").addClass("hide-dialog");
  });

  // show dialog edit employee
  $(".btn-edit").click(function () {
    $(".dialog").removeClass("hide-dialog");
    $(".add__employee--dialog").addClass("hide-dialog");
    $(".edit__employee--dialog").removeClass("hide-dialog");
  });

  //TOGGLING NESTED ul
  $(".drop-down .toggle-dropdown").click(function () {
    $(".drop-down .options ul").toggle();
  });

  //SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
  $(".drop-down .options ul li a").click(function () {
    var text = $(this).html();
    $(".drop-down .selected a span").html(text);
    $(".drop-down .options ul").hide();
  });

  //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
  $(document).bind("click", function (e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("drop-down"))
      $(".drop-down .options ul").hide();
  });

  var multi = new Multiselect("#subjects");
  var multi2 = new Multiselect("#rooms");
});
