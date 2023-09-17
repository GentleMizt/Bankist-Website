'use strict';
/// SELECTING ELEMENTS //

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////// FUNCTIONS /////////////////////////////

// MODAL WINDOW //
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

// BUTTON SCROLLING //
btnScrollTo.addEventListener('click', e => {
  //   const s1coords = section1.getBoundingClientRect();
  //   console.log(s1coords);
  //   console.log(e.target.getBoundingClientRect());
  //   console.log(
  //     'Current Scroll (X/Y) position:',
  //     window.pageXOffset,
  //     pageYOffset
  //   );
  //   console.log(
  //     'Height/Width Viewport',
  //     document.documentElement.clientHeight,
  //     document.documentElement.clientWidth
  //   );

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

// PAGE NAVIGATION

// WITHOUT EVENT DELEGATION
// document.querySelectorAll('.nav__link').forEach((link, i) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(`LINK-${i + 1}`);

//     // Implementing the smooth scrolling
//     const id = this.getAttribute('href');
//     console.log(id);

//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });


// WITH EVENT DELEGATION
// - Add the event listener to the common parent element
// - Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();

    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
        })
    }
})