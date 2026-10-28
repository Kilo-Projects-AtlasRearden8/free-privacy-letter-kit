(function () {
  "use strict";

  function setText(selector, value) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = value;
    }
  }

  function mirrorField(id) {
    var el = document.getElementById(id);
    if (!el) return;
    setText('[data-field="' + id + '"]', el.value);
  }

  function pad(n) {
    return n < 10 ? "0" + n : "" + n;
  }

  function init() {
    var date = document.getElementById("date");
    if (date && !date.value) {
      var d = new Date();
      date.value = d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
    }

    var form = document.getElementById("letter-form");
    if (!form) return;

    var inputs = form.querySelectorAll("input, textarea, select");
    for (var i = 0; i < inputs.length; i++) {
      mirrorField(inputs[i].id);
      inputs[i].addEventListener("input", function () {
        mirrorField(this.id);
      });
      inputs[i].addEventListener("change", function () {
        mirrorField(this.id);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
