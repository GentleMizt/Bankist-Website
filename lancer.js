'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
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

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/// SELECTING ELEMENTS ///

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);
  console.log(e.target.getBoundingClientRect());
  console.log(
    'Current Scroll (X/Y) position:',
    window.pageXOffset,
    pageYOffset
  );
  console.log(
    'Height/Width Viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  //   window.scrollTo(
  //     s1coords.left + window.pageXOffset, // Calculating the absolute position of the element relative to the document i.e the entire page.
  //     s1coords.top + window.pageYOffset   // Calculating the absolute position of the element relative to the document i.e the entire page.
  //   );

  // Old Method of implementing the scroll functionality
  //   window.scrollTo({
  //     left: s1coords.left + window.pageXOffset, // Calculating the absolute position of the element relative to the document i.e the entire page.
  //     top: s1coords.top + window.pageYOffset, // Calculating the absolute position of the element relative to the document i.e the entire page.
  //     behavior: 'smooth',
  //   });

  // Newer method of implementing it.
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

/// EVENTS AND EVENT HANDLERS ///

const h1 = document.querySelector('h1');
const alertH1 = e => {
  alert('addEventListener: Great! You are reading the heading :D');
};

// FIRST WAY OF HANDLING AN EVENTS
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// SECOND WAY OF HANDLING AN EVENTS
// h1.onmouseenter = e => {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// THIRD WAY OF HANDLING EVENTS
// - This method actually involves you handling the event in the HTML markup by passing it as an attribute to the HTML element.
// - This method was used in the early days and should not be used in mordern day JavaScript Coding.
//  <h1 onclick="alert('HTML alert')"></h1>

/// EVENT PROPAGATION: BUBBLING AND CAPTURING ///

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

const featureLink = document.querySelector('.nav__link');
const navLinks = document.querySelector('.nav__links');

featureLink.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('LINK', e.target, e.currentTarget);

  // Stopping the event propagation
  // e.stopPropagation();
});

navLinks.addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('CONTAINER', e.target, e.currentTarget);
});

// Passing in true as a third parameter in the addEventListener method enables it to handle events in the capturing phase instead of the bubbling phase.
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
  },
  true
);
