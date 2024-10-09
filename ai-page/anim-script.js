// Animation
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var elements = document.querySelectorAll(".border-line-anim-container");

    elements.forEach(function (element) {
      var scrollTop = window.scrollY;
      var elementOffset = element.getBoundingClientRect().top + window.scrollY;
      var distance = elementOffset - scrollTop;
      var windowHeight = window.innerHeight;

      // Check if the element is in view
      if (distance < windowHeight - 100) {
        // Adjust -100 for earlier/later trigger
        element.classList.add("anim");
      }
    });
  });
});
