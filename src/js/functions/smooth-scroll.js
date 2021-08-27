export function smoothScroll(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  });
};

const scrollTo = document.querySelectorAll('[data-scroll]');

[...scrollTo].forEach(function (elemScroll) {
  elemScroll.addEventListener('click', (e) => {
    e.preventDefault();
    const id = elemScroll.getAttribute('data-scroll').replace('#', '');
    smoothScroll(document.getElementById(id));
  });
});