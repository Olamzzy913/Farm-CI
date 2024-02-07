'use strict';

const aboutFarm = document.querySelector('#about');
const serviceFarm = document.getElementById('service');
const section1 = document.querySelector('.section--1');
const section2 = document.querySelector('.section--2');
const nav = document.querySelector('.nav');


///////////////////////////////////////
// Button scrolling

aboutFarm.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
 
  section1.scrollIntoView({ behavior: 'smooth' });
});

serviceFarm.addEventListener('click', function (e) {
  const s1coords = section2.getBoundingClientRect();
 
  section2.scrollIntoView({ behavior: 'smooth' });
});


///////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll('#section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////
// Sticky navigation: Intersection Observer API

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);


///////////////////////////////////////
// Service sections

const btns = document.querySelectorAll('#btn');
const serContent1 = document.querySelector('.service_content--1');
const serContent2 = document.querySelector('.service_content--2');

// btns.forEach(function (btn) {
//   btn.addEventListener('click', () => {
//     if(!serContent2.className.contains) return
//     alert('hey')

//   })
// })


// btn.addEventListener('click', function(e) {
//   e.preventDefault();
//   alert('hey')

// })

window.addEventListener('onload', () => {
   window.scrollTo(0, 0);
})