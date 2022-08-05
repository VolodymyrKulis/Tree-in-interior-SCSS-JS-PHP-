// Слайдер
let nImg =  document.querySelectorAll('.slider__content-img');
let index = 2;
for(i=0; i<nImg.length; i++) {
  nImg[i].onclick = function() {
    let data = this.getAttribute('data-content');
    index = data;
    one();
  }
}
function one() {
  for(i=0; i<nImg.length; i++) {
    nImg[i].classList.remove('active');
  }
  nImg[index].classList.add('active');
}
const nextSlide = function() {
    if(index == nImg.length-1){
      index = 0;
      one();
    }else {
      index++;
      one();
    }
}
const interval = setInterval(nextSlide, 5000);

// Поява картинок
function onEntry(entry) {
  entry.forEach(change => {
    if(change.isIntersecting) {
      change.target.classList.add('element-show');
    } else {
      change.target.classList.remove('element-show')
    }
  });
}
let options = {
  threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.collection__img');

  for (let elm of elements) {
    observer.observe(elm);
}

// Дизайн, tabs
const tabs = document.querySelectorAll('.design__name');
const tContent = document.querySelectorAll('.design__content-img');

for(i=0; i<tabs.length; i++) {
  tabs[i].onclick = function() {
    let data = this.getAttribute('data-btn');
    for(i=0; i<tabs.length; i++) {
      tabs[i].classList.remove('active');
      tContent[i].classList.remove('active');
    }
    tabs[data].classList.add('active');
    tContent[data].classList.add('active');
  }
}

// Кнопка вгору
document.querySelector('.back-to-top').onclick = (function () {
    document.querySelector('body,html').animate({ scrollTop: 0}, 800); // 800 - Скорость анимации
});
var i=0;
window.addEventListener('scroll',function() { // Отслеживаем начало прокрутки
    let scrolled = window.pageYOffset || document.documentElement.scrollTop; // Вычисляем сколько было прокручено.
    if(scrolled > 300) { // Если высота прокрутки больше 350 - показываем кнопку
        // document.querySelector('.back-to-top').classList.add('active');
        if (!i) {
          document.querySelector('.back-to-top').classList.add('active');
          document.querySelector('.hamburger').classList.remove('active');//закриття вспливаючого меню
           document.querySelector('.header__title').classList.remove('active');//закриття вспливаючого меню
           document.querySelector('.header__title-m').classList.remove('active');//закриття вспливаючого меню
          i++;
        }
    } else if(scrolled <301) {
        i=0;
        document.querySelector('.back-to-top').classList.remove('active');
    }
});

/* Вспливаюче меню */

document.querySelector('.hamburger__menu-text').onclick = function(){
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.header__title').classList.toggle('active');
    document.querySelector('.header__title-m').classList.toggle('active');
}






























;
