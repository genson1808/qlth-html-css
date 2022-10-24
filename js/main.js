// $(".menu-item").on("click", (event) => {
//   const clickedElement = $(event.target);
//   console.log(event);
// });

import Multiselect from "./combobox.js";

$(document).ready(function() {
  $(".menu-toggle").click(function() {
    $(".header-logo").toggleClass("toggle");
    $(".menu-text").toggleClass("toggle");
    $(".left-container").toggleClass("toggle");
  });

  var multi = new Multiselect("#subjects");
  var multi2 = new Multiselect("#rooms");

  // // $(".dropdown dt a").on("click", function () {
  // //   $(".dropdown dd ul").slideToggle("fast");
  // // });

  // $(".dropdown .toggle-dropdown").on("click", function () {
  //   $(".dropdown dd ul").slideToggle("fast");
  // });
  // // $(".dropdown dd ul li a").on("click", function () {
  // //   $(".dropdown dd ul").hide();
  // // });

  // $(".multiSel").on("click", ".selected-item .remove-item", function () {
  //   console.log("testing");
  //   let pr = $(this).closest(".wrap-item");
  //   console.log(pr);
  //   pr.remove();
  // });

  // function getSelectedValue(id) {
  //   return $("#" + id)
  //     .find("dt a span.value")
  //     .html();
  // }

  // $(document).bind("click", function (e) {
  //   var $clicked = $(e.target);
  //   if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
  // });

  // $('.mutliSelect input[type="checkbox"]').on("click", function () {
  //   var title = $(this)
  //       .closest(".mutliSelect")
  //       .find('input[type="checkbox"]')
  //       .val(),
  //     title = $(this).val();

  //   // if ($(this).is(":checked")) {
  //   //   var html = '<span title="' + title + '">' + title + "</span>";
  //   //   $(".multiSel").append(html);
  //   //   $(".hida").hide();
  //   // } else {
  //   //   $('span[title="' + title + '"]').remove();
  //   //   var ret = $(".hida");
  //   //   $(".dropdown dt a").append(ret);
  //   // }

  //   if ($(this).is(":checked")) {
  //     var html =
  //       '<span class="wrap-item"><span class="selected-item" title="' +
  //       title +
  //       '">' +
  //       title +
  //       ' <span class="remove-item"></span> ' +
  //       "</span></span>";
  //     $(".multiSel").append(html);
  //     // $(".hida").hide();
  //   } else {
  //     $('span[title="' + title + '"]').closest(".wrap-item").remove();
  //     // var ret = $(".hida");
  //     // $(".dropdown dt a").append(ret);
  //   }
  // });

  // // $(".multiSel .selected-item").click(function () {
  // //   console.log("clicked");
  // //   let pr = $(this).closest(".selected-item");
  // //   console.log(pr);
  // // });
});
