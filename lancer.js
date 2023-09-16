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

//////////// LECTURES ///////////////////////

// SELECTING ELEMENTS //
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section-1');
// const allButtons = document.getElementsByTagName('button'); // This returns an HTML Collection
// console.log(allButtons);
// console.log(document.getElementsByClassName('btn'));

// CREATING AND INSERTING ELEMENTS (PROGRAMMATICALY)//
// .insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.append(message);

// If we wanted to insert multiple copies of the same element. what we do is to copy the original copy.
// header.append(message.cloneNode(true));  // Like this

// header.before(message);
// header.after(message);

// DELETING ELEMENTS //
document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove(); // The much newer method of deleting elements
  // message.parentElement.removeChild(message); // The previous way of deleting elements
});

//// STYLES, ATTRIBUTES AND CLASSES ////

// STYLES //
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');  // changing the value of custom css properties.


