(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainnav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.textContent = open ? 'CLOSE' : 'MENU';
    });
  }

  var form = document.getElementById('leadForm');
  if (form) {
    var btn = document.getElementById('leadSubmit');
    var msg = document.getElementById('formMsg');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      msg.className = 'form-msg';
      msg.textContent = '';

      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });

      if (!data.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
        msg.className = 'form-msg err';
        msg.textContent = 'Please enter a valid work email so we can send the counts.';
        return;
      }

      btn.disabled = true;
      var original = btn.textContent;
      btn.textContent = 'Sending...';

      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(function (r) { return r.json(); })
        .then(function (res) {
          if (res && res.ok) {
            if (window.gtag) { window.gtag('event', 'generate_lead', { source: data.source || 'website' }); }
            window.location.href = res.redirect || '/book?submitted=1';
          } else {
            throw new Error((res && res.error) || 'Submission failed');
          }
        })
        .catch(function (err) {
          btn.disabled = false;
          btn.textContent = original;
          msg.className = 'form-msg err';
          msg.textContent = err.message + ' — or email us directly.';
        });
    });
  }
})();
