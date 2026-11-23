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
    const message = slot.querySelector('.development-message');
    if (!message) return;
    message.hidden = false;
    slot.setAttribute('aria-expanded', 'true');
  });
});
