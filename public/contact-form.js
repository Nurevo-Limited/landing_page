(function () {
  var form = document.querySelector("[data-contact]");
  if (!form) return;
  var select = form.querySelector("select[name=route]");
  var button = form.querySelector("button[type=submit]");
  var status = form.querySelector("[data-contact-status]");
  if (!select) return;

  var hash = window.location.hash.replace("#", "");
  if (hash) {
    for (var i = 0; i < select.options.length; i += 1) {
      if (select.options[i].value === hash) select.selectedIndex = i;
    }
  }

  function currentAction() {
    return select.options[select.selectedIndex].getAttribute("data-action") || "";
  }

  function sync() {
    var action = currentAction();
    if (action) form.action = action;
    if (button) button.disabled = !action;
  }

  function say(text, ok) {
    if (!status) return;
    status.textContent = text;
    status.className = "text-sm " + (ok ? "text-link" : "text-red-700");
  }

  form.addEventListener("submit", function (event) {
    var action = currentAction();
    if (!action || !window.fetch || !window.FormData) return;
    event.preventDefault();
    button.disabled = true;
    say(form.getAttribute("data-sending") || "", true);
    fetch(action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (!response.ok) throw new Error(String(response.status));
        form.reset();
        sync();
        say(form.getAttribute("data-sent") || "", true);
      })
      .catch(function () {
        button.disabled = false;
        say(form.getAttribute("data-failed") || "", false);
      });
  });

  select.addEventListener("change", sync);
  sync();
})();
