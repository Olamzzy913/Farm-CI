
const navMenu = document.querySelector('#navMenu');
const navMenuClose = document.querySelector('#navMenuClose');

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