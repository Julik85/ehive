// const link = document.querySelector('a[href="#prices"]');
// console.log('link:', link);
// link.addEventListener('click', function (e) {
//   e.preventDefault();
//   console.log('test');
//   document.querySelector('.products').scrollIntoView({ behavior: 'smooth' });
// });

const topLink = document.querySelector('.footer-up--link');

topLink.addEventListener('click', function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
