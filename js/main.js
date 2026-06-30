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
});
