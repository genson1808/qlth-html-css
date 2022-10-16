// $(".menu-item").on("click", (event) => {
//   const clickedElement = $(event.target);
//   console.log(event);
// });

$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".header-logo").toggleClass("toggle");
    $(".menu-text").toggleClass("toggle");
    $(".left-container").toggleClass("toggle");
  });
});
