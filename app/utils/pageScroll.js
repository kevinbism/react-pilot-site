export function pageScroll(offset = 0, el = 'html') {
  if (window.scrollY > offset) {
    document.querySelector(el).classList.add('scrolled');
  } else {
    document.querySelector(el).classList.remove('scrolled');
  }
}
