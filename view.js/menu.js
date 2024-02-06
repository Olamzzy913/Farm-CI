const navMenu = document.querySelector('#navMenu');
const navMenuClose = document.querySelector('#navMenuClose');
const aboutFarmPage = document.querySelector('#aboutFarm');
const serviceFarmPage = document.querySelector('#serviceFarm');

///////////////////////////////////////
// Menu

 const navOverlay = document.querySelector('.navOverlay');
 const mainSection = document.querySelector('.main');
 const headerSection = document.querySelector('.header');
//  const section1 = document.querySelector('.section--1');

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


///////////////////////////////////////
// switch Page

aboutFarmPage.addEventListener('click', function () {
 mainSection.classList.remove("hidden");
 headerSection.classList.remove("hidden");
 navOverlay.classList.remove("block");
 navOverlay.classList.add("hidden");
 window.location.href = "/";
})

serviceFarmPage.addEventListener('click', function () {
 mainSection.classList.remove("hidden");
 headerSection.classList.remove("hidden");
 navOverlay.classList.remove("block");
 navOverlay.classList.add("hidden");
  window.location.href = "/";
})
