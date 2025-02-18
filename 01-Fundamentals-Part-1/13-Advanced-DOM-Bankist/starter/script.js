'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// for (let i = 0; i < btnsOpenModal.length; i++)

//   btnsOpenModal[i].addEventListener('click', openModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// NOTES //
// FOREACH METOD CAN BE CALLED ON A NODELIST

// array.forEach(element => {

// });
// SELECTING, CREATING AND DELETING ELEMENTS
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const Header = document.querySelector('.header');
let allSection = document.querySelectorAll('.section');

console.log(allSection);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

const message = document.createElement('div');

message.innerHTML =
  'This website uses cookies <button class="btn btn--close-cookie">Got it!</button>';

Header.append(message);
// Header.append(message.cloneNode(true));
// Header.after(message);

// Header.after(message);

// DELETE ELEMENTS

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

// STYLE
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message), 10) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes

let logo = document.querySelector('.nav__logo');

// nonstandard ATTRIBUTE

console.log(logo.designer);
console.log(logo.getAttribute('designer'));

// setAttribute
logo.alt = 'sill mee';

console.log(logo.alt);

logo.setAttribute('class', 'dess');

console.log(logo.className);

console.log(logo.src);
console.log(logo.getAttribute('src'));

console.log(logo.dataset.versionNumber);

// class

logo.classList.add('c', 'l', 'p'); //you can add multiple classes
logo.classList.remove('c');
logo.classList.contains('c');
logo.classList.toggle('c');

// IMPLEMENTING SMOOTH SCROLLING
const section1 = document.querySelector('#section--1');

const btnScrollTo = document.querySelector('.btn--scroll-to');

btnScrollTo.addEventListener('click', function name(e) {
  const coords = section1.getBoundingClientRect();

  console.log(coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll (X/Y)', window.scrollX, scrollY); //the distance (px) i scrolled away from the top(y) and side(x)

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling //
  // window.scrollTo(coords.left + window.scrollX, coords.top + window.scrollY);

  // window.scrollTo({
  //   left: coords.left + window.scrollX,
  //   top: coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

// TYPE OF EVENT AND EVENT HANDLER //

const H1 = document.querySelector('h1');

const alert1 = function (e) {
  // alert('AddEventListener is active!');
};

// H1.addEventListener('mouseenter', alert1);

// H1.onmouseenter = function (e) {
//   alert('second addEventListener(onmouseenter)');
// };

setTimeout(() => H1.removeEventListener('mouseenter', alert1), 3000);

// CAPTURING AND BUBBLING //
const randomiNT = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomiNT(0, 255)}, ${randomiNT(0, 255)}, ${randomiNT(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  //STOP PROPAGATION //
  e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log('CONTAINER', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  // this.style.backgroundColor = randomColor();
  // console.log('NAV', e.target, e.currentTarget);
});

////////////////////////////////////////////////////////////////////////////////

document.querySelectorAll('.nav__link').forEach(link =>
  link.addEventListener('click', function (e) {
    // this.style.backgroundColor = randomColor();
    console.log('llink');

    // const id = this.getAttribute('href');
    // console.log(id);

    // document.querySelector(id).scrollIntoView({ behavior: 'smooth' });

    // e.preventDefault();
  })
);

// EVENT DELEGATION
// 1. ADD addEventListener TO COMMON PARENT Element
// 2. DETERMINE WHAT ELEMENT ORIGINATED THE EVENT

document.querySelector('.nav__links').addEventListener('click', function (e) {
  // document.querySelector(this.getAttribute('href'))
  console.log(e.target);
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    console.log('LINKS');
    const id = e.target.getAttribute('href');
    // console.log(id);

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
