(function () {
  if (!navigator.clipboard) return;
  var buttons = document.querySelectorAll("button[data-copy]");
  for (var i = 0; i < buttons.length; i += 1) {
    (function (button) {
      var target = document.querySelector(button.getAttribute("data-copy"));
      if (!target) return;
      var label = button.querySelector("span");
      var original = label ? label.textContent : "";
      button.hidden = false;
      button.addEventListener("click", function () {
        navigator.clipboard.writeText(target.textContent.trim()).then(function () {
          if (!label) return;
          label.textContent = button.getAttribute("data-copied") || original;
          window.setTimeout(function () {
            label.textContent = original;
          }, 2000);
        });
      });
    })(buttons[i]);
  }
})();
