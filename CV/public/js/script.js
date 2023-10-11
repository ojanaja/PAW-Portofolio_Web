const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 120);
});

window.onload = function () {
  var shadowRoot = document.querySelector("spline-viewer").shadowRoot;
  shadowRoot.querySelector("#logo").remove();
};
