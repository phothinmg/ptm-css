var doc = document.documentElement;
var body = document.body;
var head = document.head;
// ===========================================================
(function () {
  var tablerLink = document.createElement("link");
  tablerLink.rel = "stylesheet";
  tablerLink.href =
    "https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css";
  // ==
  let topBtn = document.createElement("button");
  topBtn.classList.add("top-btn");
  topBtn.setAttribute("title", "Scroll To Top");
  let icon = document.createElement("i");
  icon.classList.add("ti");
  icon.classList.add("ti-square-rounded-arrow-up");
  topBtn.appendChild(icon);
  body.appendChild(topBtn);
  // On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
  topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // On scroll, Show/Hide the btn with animation
  window.onscroll = () => (topBtn.style.opacity = window.scrollY > 500 ? 1 : 0);
  // ==

  head.appendChild(tablerLink);
})();
