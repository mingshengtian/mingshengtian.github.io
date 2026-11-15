/* Language toggle (English / 中文).
   The initial language is set by a tiny inline script in <head> so the page
   never flashes the wrong language; this file wires up the button. */
(function () {
  var KEY = "site-lang";
  var root = document.documentElement;

  function save(lang) {
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {
      /* storage unavailable: the choice simply isn't remembered */
    }
  }

  function apply(lang) {
    root.setAttribute("data-lang", lang);
    root.lang = lang === "zh" ? "zh-CN" : "en";
    var title = root.getAttribute("data-title-" + lang);
    if (title) document.title = title;

    var buttons = document.querySelectorAll("[data-lang-toggle]");
    for (var i = 0; i < buttons.length; i++) {
      var b = buttons[i];
      b.textContent = lang === "zh" ? "EN" : "中文";
      b.setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切换到中文");
      b.setAttribute("lang", lang === "zh" ? "en" : "zh-CN");
    }
  }

  apply(root.getAttribute("data-lang") === "zh" ? "zh" : "en");

  document.addEventListener("click", function (event) {
    var target = event.target.closest ? event.target.closest("[data-lang-toggle]") : null;
    if (!target) return;
    var next = root.getAttribute("data-lang") === "zh" ? "en" : "zh";
    apply(next);
    save(next);
  });
})();
