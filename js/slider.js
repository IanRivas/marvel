let imgSlide = document.querySelector('#slide');
const btn1 = document.querySelector('#slideBtn1');
const btn2 = document.querySelector('#slideBtn2');
const btn3 = document.querySelector('#slideBtn3');

btn1.addEventListener('click', () => {
  imgSlide.src = './assets/img/hero.jpg';
  btn3.src = './assets/icon/circulo-w.svg';
  btn2.src = './assets/icon/circulo-w.svg';
  btn1.src = './assets/icon/circulo-g.svg';
});

btn2.addEventListener('click', () => {
  imgSlide.src = './assets/img/xmen.jpg';
  btn1.src = './assets/icon/circulo-w.svg';
  btn3.src = './assets/icon/circulo-w.svg';
  btn2.src = './assets/icon/circulo-g.svg';
});

btn3.addEventListener('click', () => {
  imgSlide.src = './assets/img/4fantasticos.jpg';
  btn2.src = './assets/icon/circulo-w.svg';
  btn1.src = './assets/icon/circulo-w.svg';
  btn3.src = './assets/icon/circulo-g.svg';
});
