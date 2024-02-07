const forgetPassword = document.querySelector('#fgPassword');
const loginSection = document.querySelector('.login');
const verifyEmailSection = document.querySelector('.verifyEmail');
const btnProfile = document.querySelector('#btnProfile');
const btnProfileContexts = document.querySelectorAll('#btnProfileContext');
const overlay1 = document.querySelector('.modal1');
const overlay2 = document.querySelector('.modal2');
const overlayModel = document.querySelector('.overlayModel');
const btnClose = document.querySelector('.closeBtn');


///////////////////////////////////////
// close overlayModel
btnClose.addEventListener('click', function(e) {
  overlayModel.classList.add("hidden");
  overlayModel.classList.remove("fixed");
  overlay1.classList.remove("flex");
  overlay1.classList.add("hidden");
  overlay2.classList.add("hidden");
  overlay2.classList.remove("flex");
})

///////////////////////////////////////
// open overlay1


btnProfileContexts.forEach(function (btnProfileContext) {
  btnProfileContext.addEventListener('click', () => {
      overlayModel.classList.add("fixed");
      overlayModel.classList.remove("hidden");
      overlay2.classList.remove("hidden");
      overlay2.classList.add("flex");
      overlay1.classList.add("hidden");
      overlay1.classList.remove("flex");

  })
})



///////////////////////////////////////
// open overlay2
btnProfile.addEventListener('click', function (e) {
  e.preventDefault();
  overlayModel.classList.add("fixed");
  overlayModel.classList.remove("hidden");
  overlay1.classList.remove("hidden");
  overlay1.classList.add("flex");
  overlay2.classList.add("hidden");
  overlay2.classList.remove("flex");
});


///////////////////////////////////////
// forget Password
forgetPassword.addEventListener('click', function (e) {
e.preventDefault();

  loginSection.classList.remove("flex");
  loginSection.classList.add("hidden");

  verifyEmailSection.classList.remove("hidden");
  verifyEmailSection.classList.add("flex");
});

//  const navOverlay = document.querySelector('.navOverlay');
//  const mainSection = document.querySelector('.main');
//  const headerSection = document.querySelector('.header');

// navMenu.addEventListener('click',  () => {

//  mainSection.classList.add("hidden");
//  headerSection.classList.add("hidden");
//  navOverlay.classList.add("block");
//  navOverlay.classList.remove("hidden");
// })

// navMenuClose.addEventListener('click',  () => {

//  mainSection.classList.remove("hidden");
//  headerSection.classList.remove("hidden");
//  navOverlay.classList.remove("block");
//  navOverlay.classList.add("hidden");
// })