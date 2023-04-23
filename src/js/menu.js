const openMenuBtn = document.querySelector('.mobile-menu__btn--open');
const closeMenuBtn = document.querySelector('.mobile-menu__btn--close');
const navigation = document.querySelector('.nav');

const navigate = document.querySelector('.nav');
const links = document.querySelectorAll('.nav-list__link');
const buttonOpen = document.querySelector('.mobile-menu__btn--open');

links.forEach(link => link.addEventListener('click',(e) =>{
  e.preventDefault()
  console.log(link.href);
  if(link.textContent === 'О нас'){    
    document.querySelector('.about-section').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
  }
  if(link.textContent === 'Производство'){    
    document.querySelector('.production-section').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
  }
  if(link.textContent === 'Продукция'){    
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
  }
  if(link.textContent === 'Цены'){    
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
  }
  if(link.textContent === 'Контакты'){    
    document.querySelector('.footer-section').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
  }
  if(link.textContent ==='+7 (777) 777 77 77'){
    window.location.href = 'tel:+77777777';
  }
  
}))

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  navigation.classList.toggle('hidden');
  document.body.classList.toggle('no-scroll');
  closeMenuBtn.classList.toggle('hidden');
  openMenuBtn.classList.toggle('hidden');
}
