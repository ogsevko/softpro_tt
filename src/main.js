'use strict';

// Tabs
document.getElementById('lorem2').style.display = 'none';

function openContent(event) {
  const tabcontent = document.getElementsByClassName('about__tab-heading');

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  const tabs = document.getElementsByClassName('about__tab');

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(' about__tab_active', '');
  }

  const id = event.currentTarget.id.includes('1') ? 'lorem1' : 'lorem2';

  document.getElementById(id).style.display = 'block';
  event.currentTarget.className += ' about__tab_active';
}

const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');

tab1.addEventListener('click', openContent);
tab2.addEventListener('click', openContent);

// Slider
let slideIndex = 1;

showDivs(slideIndex);

function plusLis(clickEvent) {
  const button = clickEvent.target;

  if (button.classList.contains('header__slider-button-left')) {
    showDivs(slideIndex -= 1);
  }

  if (button.classList.contains('header__slider-button-right')) {
    showDivs(slideIndex += 1);
  }
}

function showDivs(n) {
  let i;
  const item = document.getElementsByClassName('header__content-item');

  if (n > item.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = item.length;
  }

  for (i = 0; i < item.length; i++) {
    item[i].style.display = 'none';
  }

  item[slideIndex - 1].style.display = 'block';
}

function dots(clickEvent) {
  const dotsList = document.querySelector('.header__dots');
  const button = clickEvent.target;
  const dotsArray = [...dotsList.children];
  let active = 0;

  for (let i = 0; i < dotsArray.length; i++) {
    if (dotsArray[i].classList.contains('header__dot-active')) {
      active = i;
    }
  }

  if (button.classList.contains('header__slider-button-right')) {
    dotsList.children[active].classList.remove('header__dot-active');

    if (active === dotsArray.length - 1) {
      dotsList.children[0].classList.add('header__dot-active');
    } else {
      dotsList.children[active + 1].classList.add('header__dot-active');
    }
  }

  if (button.classList.contains('header__slider-button-left')) {
    dotsList.children[active].classList.remove('header__dot-active');

    if (active === 0) {
      dotsList.children[dotsArray.length - 1]
        .classList.add('header__dot-active');
    } else {
      dotsList.children[active - 1].classList.add('header__dot-active');
    }
  }
}

const prev = document.querySelector('.header__slider-button-left');
const next = document.querySelector('.header__slider-button-right');

prev.addEventListener('click', dots);
prev.addEventListener('click', plusLis);
next.addEventListener('click', dots);
next.addEventListener('click', plusLis);
