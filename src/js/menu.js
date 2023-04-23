const openMenuBtn = document.querySelector('.mobile-menu__btn--open');
const closeMenuBtn = document.querySelector('.mobile-menu__btn--close');
const navigation = document.querySelector('.nav');

const navigate = document.querySelector('.nav');

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  navigation.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
  closeMenuBtn.classList.toggle('hidden');
  openMenuBtn.classList.toggle('hidden');
}
