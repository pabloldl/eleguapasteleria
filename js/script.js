'use strict';
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
const smallScreen = window.matchMedia('(max-width: 800px)');
function closeMenu(returnFocus = false) {
  menu.setAttribute('aria-expanded', 'false');
  navigation.hidden = smallScreen.matches;
  if (returnFocus) menu.focus();
}
function updateNavigation() {
  menu.hidden = !smallScreen.matches;
  closeMenu();
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  navigation.hidden = open;
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header') && menu.getAttribute('aria-expanded') === 'true') closeMenu();
});
smallScreen.addEventListener('change', updateNavigation);
updateNavigation();
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navigation.querySelectorAll('a').forEach(link => {
          if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -50% 0px', threshold: 0 });
  ['cafeteria', 'pasteleria', 'heladeria', 'encuentranos'].forEach(id => observer.observe(document.getElementById(id)));
}
const copyButton = document.getElementById('copy-phone');
const status = document.getElementById('copy-status');
const manualCopy = document.getElementById('manual-copy');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('603 299 189');
    status.textContent = 'Teléfono copiado: 603 299 189';
    manualCopy.hidden = true;
  } catch {
    manualCopy.hidden = false;
    const field = document.getElementById('phone-value');
    field.focus();
    field.select();
    status.textContent = 'Copia el número seleccionado.';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
