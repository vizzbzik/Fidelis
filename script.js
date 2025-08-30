// Мини-скрипт: подсветка активного пункта меню при прокрутке
(function() {
  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.nav a')];

  const setActive = () => {
    let current = sections[0].id;
    for (const sec of sections) {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight * 0.35) current = sec.id;
    }
    links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
  };

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
