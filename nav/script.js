let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');

burger.addEventListener('click', e => {
  nav.classList.toggle('appear');
})