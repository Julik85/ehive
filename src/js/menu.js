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
    document.body.classList.remove('no-scroll');
  }
  if(link.textContent === 'Производство'){    
    document.querySelector('.production-section').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
    document.body.classList.remove('no-scroll');
  }
  if(link.textContent === 'Продукция'){    
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
    document.body.classList.remove('no-scroll');
  }
  if(link.textContent === 'Цены'){    
    document.querySelector('.products').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
    document.body.classList.remove('no-scroll');
  }
  if(link.textContent === 'Контакты'){    
    document.querySelector('.footer-section').scrollIntoView({ behavior: 'smooth' })
    navigation.classList.add('hidden');
    buttonOpen.classList.remove('hidden');
    document.body.classList.remove('no-scroll');
  }
  if(link.textContent ==='+7 (777) 777 77 77'){
    window.location.href = 'tel:+77777777';
  }
  
}))

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);

function openMenu(){
  navigation.classList.remove('hidden');
  document.body.classList.add('no-scroll');
  closeMenuBtn.classList.remove('hidden');
  openMenuBtn.classList.add('hidden');

}

function closeMenu(){
  navigation.classList.add('hidden');
  document.body.classList.remove('no-scroll');
  closeMenuBtn.classList.add('hidden');
  openMenuBtn.classList.remove('hidden');

}

// function toggleMenu() {
//   if( !navigation.classList.contains('hidden')){
//     closeMenuBtn.classList.remove('hidden');
//     return
//   }
//   if( navigation.classList.contains('hidden')){
//     closeMenuBtn.classList.add('hidden');
//     navigation.classList.add('hidden');
//     return
//   }
//   navigation.classList.toggle('hidden');
//   document.body.classList.toggle('no-scroll');
//   closeMenuBtn.classList.toggle('hidden');
//   openMenuBtn.classList.toggle('hidden');
// }
