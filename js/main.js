// Mobile menu toggle
function toggleMenu() {
  document.getElementById('menu').classList.toggle('open');
}

// Footer year
document.addEventListener('DOMContentLoaded', function () {
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Scroll reveal
  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  // Shrinking sticky header (used by enhance.css; harmless if that layer is removed)
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () { header.classList.toggle('scrolled', window.scrollY > 40); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Formspree AJAX submit — sends without leaving the page, shows inline status
  document.querySelectorAll('.fs-form').forEach(function (form) {
    var status = form.querySelector('.form-status');
    var btn = form.querySelector('[type="submit"]');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var original = btn ? btn.textContent : '';
      if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
      if (status) { status.className = 'form-status'; status.textContent = ''; }
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function (res) {
        if (res.ok) {
          form.reset();
          if (status) { status.className = 'form-status ok'; status.textContent = 'Thanks — your message has been sent.'; }
        } else {
          return res.json().then(function (data) {
            var msg = (data && data.errors) ? data.errors.map(function (x) { return x.message; }).join(', ')
                                            : 'Sorry, something went wrong. Please try again.';
            if (status) { status.className = 'form-status err'; status.textContent = msg; }
          });
        }
      }).catch(function () {
        if (status) { status.className = 'form-status err'; status.textContent = 'Network error — please try again.'; }
      }).finally(function () {
        if (btn) { btn.disabled = false; btn.textContent = original; }
      });
    });
  });
});
