const e=document.querySelector(".mobile-menu__btn--open"),o=document.querySelector(".mobile-menu__btn--close"),t=document.querySelector(".nav"),s=(document.querySelector(".nav"),document.querySelectorAll(".nav-list__link")),n=document.querySelector(".mobile-menu__btn--open");function l(){t.classList.toggle("hidden"),document.body.classList.toggle("no-scroll"),o.classList.toggle("hidden"),e.classList.toggle("hidden")}s.forEach((e=>e.addEventListener("click",(o=>{o.preventDefault(),console.log(e.textContent),"О нас"===e.textContent&&(document.querySelector(".about-section").scrollIntoView({behavior:"smooth"}),t.classList.add("hidden"),n.classList.remove("hidden")),"Производство"===e.textContent&&(document.querySelector(".production-section").scrollIntoView({behavior:"smooth"}),t.classList.add("hidden"),n.classList.remove("hidden")),"Продукция"===e.textContent&&(document.querySelector(".products").scrollIntoView({behavior:"smooth"}),t.classList.add("hidden"),n.classList.remove("hidden")),"Цены"===e.textContent&&(document.querySelector(".products").scrollIntoView({behavior:"smooth"}),t.classList.add("hidden"),n.classList.remove("hidden")),"Контакты"===e.textContent&&(document.querySelector(".footer-section").scrollIntoView({behavior:"smooth"}),t.classList.add("hidden"),n.classList.remove("hidden"))})))),e.addEventListener("click",l),o.addEventListener("click",l),$(".autoplay-why-us").slick({dots:!1,slidesToShow:1,slidesToScroll:1,arrows:!1,autoplay:!0,autoplaySpeed:5e3}),$(".autoplay-gallery").slick({dots:!0,slidesToShow:1,slidesToScroll:1,arrows:!1});document.querySelector(".footer-up--link").addEventListener("click",(function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.a7b4e1bd.js.map
