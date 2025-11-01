(function () {
  var doc = document.documentElement;
  var body = document.body;
  var head = document.head;
  var navBar = document.getElementById("nav");
  var topBtn = document.createElement("button");
  var themeBtn = document.getElementById("themeBtn");

  var domscripts = {
    init: function init() {
      var self = this;
      self.themeToggle();
      self.scrollToTop();
      self.onScroll();
    },
    scrollToTop: function scrollToTop() {
      topBtn.classList.add("topBtn");
      topBtn.setAttribute("title", "Scroll To Top");
      body.appendChild(topBtn);
      topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    },
    themeToggle: function themeToggle() {
      themeBtn.setAttribute("title", "Themes");
      themeBtn.onclick = () => {
        doc.classList.toggle("dark");
      };
    },
    onScroll: function onScroll() {
      window.onscroll = () => {
        topBtn.style.opacity = window.scrollY > 500 ? 1 : 0;
        navBar.style.position = window.scrollY > 200 ? "fixed" : "relative";
      };
    },
  };
  domscripts.init();
})();
