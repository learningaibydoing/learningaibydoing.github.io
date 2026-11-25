const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  mobileNav.hidden = expanded;
});

mobileNav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.embed-slot').forEach((slot) => {
  slot.addEventListener('click', () => {
    const frameId = slot.getAttribute('aria-controls');
    const frame = frameId ? document.getElementById(frameId) : null;
    const src = slot.dataset.src;
    if (!frame || !src) return;

    const isExpanded = slot.getAttribute('aria-expanded') === 'true';
    if (!frame.querySelector('iframe')) {
      const iframe = document.createElement('iframe');
      iframe.src = src;
      iframe.title = slot.querySelector('strong')?.textContent || 'Interactive learning experiment';
      iframe.loading = 'lazy';
      iframe.setAttribute('allow', 'clipboard-write');
      frame.append(iframe);
    }

    frame.hidden = isExpanded;
    slot.setAttribute('aria-expanded', String(!isExpanded));
    slot.querySelector('.launch-message').textContent = isExpanded ? 'Launch experiment' : 'Close experiment';

    if (!isExpanded) {
      requestAnimationFrame(() => frame.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    }
  });
});
