'use strict';

const aboutFarm = document.querySelector('#about');
const serviceFarm = document.getElementById('service');
const section1 = document.querySelector('.section--1');
const section2 = document.querySelector('.section--2');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('#navMenu');
const navMenuClose = document.querySelector('#navMenuClose');


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
// Menu

 const navOverlay = document.querySelector('.navOverlay');
 const mainSection = document.querySelector('.main');
 const headerSection = document.querySelector('.header');

navMenu.addEventListener('click',  () => {

 mainSection.classList.add("hidden");
 headerSection.classList.add("hidden");
 navOverlay.classList.add("block");
 navOverlay.classList.remove("hidden");
})

navMenuClose.addEventListener('click',  () => {

 mainSection.classList.remove("hidden");
 headerSection.classList.remove("hidden");
 navOverlay.classList.remove("block");
 navOverlay.classList.add("hidden");
})