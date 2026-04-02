(function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  if (toggle && header) {
    toggle.addEventListener("click", function () {
      header.classList.toggle("is-open");
      toggle.setAttribute(
        "aria-expanded",
        header.classList.contains("is-open")
      );
    });
    document.querySelectorAll(".main-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var form = document.getElementById("contact-form");
  if (form) {
    form.querySelectorAll("input, textarea").forEach(function (el) {
      el.addEventListener("input", function () {
        var g = el.closest(".form-group");
        if (g) g.classList.remove("is-invalid");
      });
    });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll(".form-group").forEach(function (g) {
        g.classList.remove("is-invalid");
      });
      var name = form.querySelector('[name="name"]');
      var email = form.querySelector('[name="email"]');
      var message = form.querySelector('[name="message"]');
      var captcha = form.querySelector('[name="captcha"]');
      if (!name || !String(name.value).trim()) {
        valid = false;
        if (name) name.closest(".form-group").classList.add("is-invalid");
      }
      if (
        !email ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email.value).trim())
      ) {
        valid = false;
        if (email) email.closest(".form-group").classList.add("is-invalid");
      }
      if (!message || !String(message.value).trim()) {
        valid = false;
        if (message) message.closest(".form-group").classList.add("is-invalid");
      }
      var captchaOk = captcha && String(captcha.value).trim() === "7";
      if (!captchaOk) {
        valid = false;
        var cg = captcha && captcha.closest(".form-group");
        if (cg) cg.classList.add("is-invalid");
      }
      if (!valid) return;
      alert("Thanks — your message has been recorded (demo only).");
      form.reset();
    });
  }
})();
