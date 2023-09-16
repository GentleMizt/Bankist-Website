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

// ATTRIBUTES //
const logo = document.querySelector('.nav__logo');

// standard attributes
console.log(logo.alt);
console.log(logo.className);
console.log(logo.src);
// NB: The above would have the attributes created as properties on the LOGO OBJECT in the DOM because it is a standard attribute of the image element.

logo.alt = 'Beautiful minimalist logo';

// non standard
console.log(logo.designer); // the attribute would not get created as a property because it's not a standard attribute
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); // This returns the absolute URL path of the image
console.log(logo.getAttribute('src')); // This returns the relative URL of the image.

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// DATA ATTRIBUTES //
// - These are special kind of attributes that starts with the word data.
// - these kind of attributes are stored in the dataset objects
// - to access such kind of attributes, this is how it's done

console.log(logo.dataset.versionNumber);

// CLASSES //
// - These are basically the 4 main class methods you need to know of.

logo.classList.add('cl');
logo.classList.remove('cl');
logo.classList.toggle('cl');
logo.classList.contains('cl');

// NB: The reason why it is bad to use this method of adding class names is because 
// - It overides all previously set class names on that particular element
// - It only allows you to have one class on that particular element as well
// logo.className = 'lancer';