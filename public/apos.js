(() => {
  const posters = new Map();
  document.querySelectorAll('.video-card').forEach(card => {
    const button = card.querySelector('.video-play');
    posters.set(card, button);
    button.addEventListener('click', () => {
      posters.forEach((poster, other) => { if (other !== card && other.querySelector('iframe')) other.querySelector('.video-frame').replaceChildren(poster); });
      const frame = document.createElement('iframe');
      frame.src = `https://www.youtube.com/embed/${encodeURIComponent(card.dataset.videoId)}?autoplay=1&playsinline=1&rel=0`;
      frame.title = card.dataset.videoTitle;
      frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      frame.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.allowFullscreen = true;
      frame.setAttribute('tabindex', '0');
      card.querySelector('.video-frame').replaceChildren(frame);
      frame.focus();
    });
  });
  const links = [...document.querySelectorAll('.page-nav a')];
  const sections = links.map(link => document.querySelector(link.getAttribute('href')));
  let scheduled = false;
  function updateNavigation() {
    let active = 0;
    sections.forEach((section, index) => { if (section.getBoundingClientRect().top <= 180) active = index; });
    links.forEach((link,index) => { link.classList.toggle('is-active', index === active); if(index === active) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current'); });
    scheduled = false;
  }
  window.addEventListener('scroll', () => { if (!scheduled) { scheduled=true; requestAnimationFrame(updateNavigation); } }, {passive:true});
  updateNavigation();
})();
