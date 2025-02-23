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

// DOM TRAVERSING

const h1 = document.querySelector('h1');

console.log(h1);

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //returns all the child nodes

console.log(h1.children); //returns only the children elements(not text or comment)

h1.firstElementChild.style.color = 'white';
console.log(h1.parentNode, h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

console.log(h1.parentElement);
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.parentElement.children);

[...h1.parentElement.children].forEach(el => {
  if (el != h1) {
    el.style.transform = 'scale(0.5)';
  }
});

const tab = document.querySelectorAll('.operations__tab');
const tab_container = document.querySelector('.operations__tab-container');
const tab_content = document.querySelectorAll('.operations__content');

// console.log(Boolean(null));

tab_container.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  if (!clicked) return;

  // REMOVE TABS
  tab.forEach(t => t.classList.remove('operations__tab--active'));
  tab_content.forEach(content =>
    content.classList.remove('operations__content--active')
  );

  // console.log(clicked.getAttribute('data-tab'));
  let numClick = clicked.getAttribute('data-tab');
  // const numberClicked = document.querySelector(`.operations__tab--${numClick}`);
  // const clickedContent = document.querySelector(
  //   `.operations__content--${numClick}`
  // );

  // ACTIVATE TABS
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${numClick}`)
    .classList.add('operations__content--active');
  //Active content area//
});

let nav = document.querySelector('.nav');

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    // const logo = link.closest('nav').querySelector('img');
    const logo = link.closest('nav').querySelector('img');
    console.log(logo);

    sibling.forEach(kin => {
      if (kin !== e.target) kin.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// STICKY NAVIGATION
// const initialCords = section1.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   console.log(initialCords.top);

//   if (window.scrollY > initialCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// STICKY NAVIGATON: INTERSECTION OBSERVER API

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
//   root: null,
//   threshold: 0,
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(Header);

const navHeight = nav.getBoundingClientRect().height;

const obsCallback = function (entries) {
  const [entry] = entries;

  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(Header);

// REVEAL SECTIONS
const allSections = document.querySelectorAll('.section');

const revealSections = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});
