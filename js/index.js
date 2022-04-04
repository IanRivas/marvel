const hambBtn = document.querySelector('#hamb-btn');
const nav = document.querySelector('.header-nav');

hambBtn.addEventListener('click', () => {
  // console.log(window.getComputedStyle(nav).display);
  if (window.getComputedStyle(nav).display === 'none') {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
});

var mql = window.matchMedia('(min-width: 550px)');

function screenTest(e) {
  if (e.matches) {
    nav.style.display = 'block';
  } else {
    nav.style.display = 'none';
  }
}

mql.addListener(screenTest);
