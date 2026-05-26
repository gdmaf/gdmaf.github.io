// Shared carousel logic — included inline in each equipment page
(function () {
  var track   = document.querySelector('.carousel-track');
  var slides  = Array.from(document.querySelectorAll('.carousel-slide'));
  var dots    = document.querySelector('.carousel-dots');
  var prevBtn = document.querySelector('.carousel-prev');
  var nextBtn = document.querySelector('.carousel-next');
  var current = 0;

  if (!track || slides.length === 0) return;

  slides.forEach(function (_, i) {
    var d = document.createElement('button');
    d.setAttribute('aria-label', 'Imagem ' + (i + 1));
    d.className = 'w-2 h-2 rounded-full transition-colors duration-200 ' +
                  (i === 0 ? 'bg-white' : 'bg-white/40');
    d.addEventListener('click', function () { go(i); });
    dots.appendChild(d);
  });

  if (slides.length <= 1) {
    if (prevBtn) prevBtn.hidden = true;
    if (nextBtn) nextBtn.hidden = true;
    if (dots)    dots.hidden    = true;
  }

  function go(n) {
    current = ((n % slides.length) + slides.length) % slides.length;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    Array.from(dots.children).forEach(function (d, i) {
      d.className = 'w-2 h-2 rounded-full transition-colors duration-200 ' +
                    (i === current ? 'bg-white' : 'bg-white/40');
    });
  }

  if (prevBtn) prevBtn.addEventListener('click', function () { go(current - 1); });
  if (nextBtn) nextBtn.addEventListener('click', function () { go(current + 1); });
})();
