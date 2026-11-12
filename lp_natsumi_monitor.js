/* Eyebrow monitor LP (Natsumi) - case carousel dots */
(function () {
  'use strict';

  document.querySelectorAll('[data-lpm-carousel]').forEach(function (carousel) {
    var dots = carousel.parentElement.querySelector('[data-lpm-dots]');
    var items = carousel.querySelectorAll('.lpm-carousel__item');
    if (!dots || items.length < 2) return;

    items.forEach(function (_, i) {
      var dot = document.createElement('span');
      if (i === 0) dot.classList.add('is-active');
      dots.appendChild(dot);
    });

    carousel.addEventListener('scroll', function () {
      var step = items[1].offsetLeft - items[0].offsetLeft;
      var index = Math.round(carousel.scrollLeft / step);
      index = Math.max(0, Math.min(items.length - 1, index));
      dots.querySelectorAll('span').forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === index);
      });
    }, { passive: true });
  });
})();
