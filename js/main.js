'use stirct'

/* ---- TOP-BAR__SUBMENU --- */

const topBarMenu = document.querySelector('.top-bar__menu');
const topBarMenuItem = topBarMenu.querySelectorAll('.top-bar__menu-item');
const subMenu = document.querySelector('.top-bar__submenu');

var showSubMenu = function (handlerItem, subMenuHandler, ) {

  handlerItem.addEventListener('mouseover', function () {

    subMenuHandler.classList.add('top-bar__submenu--show');

  });
};

var subMenuOut = function (subMenuHandlerOver) {
  subMenuHandlerOver.addEventListener('mouseout', function () {
    subMenuHandlerOver.classList.remove('top-bar__submenu--show');
  });

}

for (var i = 0; i < topBarMenuItem.length; i++) {

  showSubMenu(topBarMenuItem[5], subMenu);
  subMenuOut(subMenu);

};

/* ---- TOP-BAR__SUBMENU --- */

/* ---- SUBMENU --- */

var menuNav = document.querySelector('.navigation__menu');
var menuNavItem = menuNav.querySelectorAll('.navigation__item');
var menuNavLink = menuNav.querySelectorAll('.navigation__link');
var subMenuNav = document.querySelector('.navigation__submenu');
let page = document.querySelector('.main');

var subMenuNavEvent = function (mouseoverHandler, submMenuHandler, navLinkHandler) {
  mouseoverHandler.addEventListener('click', function () {
    submMenuHandler.classList.add('navigation__submenu--show');
    navLinkHandler.classList.add('navigation__link--arrow-down');
    mouseoverHandler.classList.add('navigation__item--active');

  });
};

var subMenuNavEventHide = function (mouseoverHandler, submMenuHandler, navLinkHandler) {
  mouseoverHandler.addEventListener('click', function () {
    submMenuHandler.classList.remove('navigation__submenu--show');
    navLinkHandler.classList.remove('navigation__link--arrow-down');
    mouseoverHandler.classList.remove('navigation__item--active');


  })
}

for (var i = 0; i < menuNavItem.length; i++) {
  subMenuNavEvent(menuNavItem[1], subMenuNav, menuNavLink[1]);
}

/* ---- SUBMENU --- */

/* ---- POPUP --- */
var rss = document.querySelector('.rss');
var emailButton = rss.querySelector('.rss__link-email');
var popup = document.querySelector('.popup');
var popupButtonClose = popup.querySelector('.popup__close');

emailButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('popup-show');
});

popupButtonClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode == 27) {
    popup.classList.remove('popup-show');
  }

});

popupButtonClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('popup-show');
});


/* ---- POPUP --- */

/*  --- GALLARY --- */
var photoPath = [
  './img/gallery/front-end01.jpg',
  './img/gallery/front-end02.jpg',
  './img/gallery/front-end03.jpg',
  './img/gallery/front-end04.jpg',
  './img/gallery/front-end05.jpg'
];

var textTitle = [
  'HTML Javascript Css',
  'HTML And CSS Conf',
  'Javascript Juniors vs Seniors',
  'Back End Days',
  'Front End Days'
];

var textPharagraphArray = [
  'In software engineering, the terms front And the data access layer (back end) of a piece In the client–server model, the client is usually  work is actually done on the server itself.',
  'In telecommunication, the front can be considered a device or service, while the back is the infrastructure that supports provision of service.',
  'A rule of thumb is that the client - side(or "front end") is any component manipulated by the user.The server - side(or "back end") code usually resides on the server, often far removed physically from the user.',
  'In telecommunication, the front can be considered a device or service, while the back is the infrastructure that supports provision of service.',
  'Note that both positions, despite possibly working on one product, have a very distinct set of skills.'
];

var thumbs = document.querySelectorAll('.thumbs__minipic');
var fullPic = document.querySelector('.latest__img');
var latestTitle = document.querySelector('.latest__title');
var latestPost = document.querySelector('.latest__post-info');
var textPharagrah = latestPost.querySelector('p');

var clickGalleryHandler = function (preview, picture, title, text) {
  preview.addEventListener('click', function () {
    latestTitle.textContent = title;
    textPharagrah.textContent = text;
    fullPic.src = picture;
  });
};





for (var i = 0; i < thumbs.length; i++) {
  clickGalleryHandler(thumbs[i], photoPath[i], textTitle[i], textPharagraphArray[i]);

};

let fullScreenPic = () => {

  let lagrePicturePopup = document.querySelector('.large-pic');
  let largePictureImage = lagrePicturePopup.querySelector('.')

}






/*  --- GALLARY --- */


/* --- VIEW MORE --- */
var newsPost = document.querySelectorAll('.news__post');
var linkMore = document.querySelectorAll('.news__link-more');

var clickNewsMoreHendler = function (linkBtn, post) {
  linkBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    post.classList.toggle('news__post--hidden');
  });
};

for (var i = 0; i < linkMore.length; i++) {
  clickNewsMoreHendler(linkMore[i], newsPost[i]);
};

/*  --- VIEW MORE --- */




let passHandler = () => {

  let pass = document.querySelectorAll('.form__pass');

  for (let i = 0; i < pass.length; i++) {
    inptPass(pass[i]);
  }
}

let inptPass = (input) => {

  let btnPass = document.querySelector('.button__text');

  let inpPassField = document.querySelectorAll('.form__pass');

  input.addEventListener('input', () => {

    if (inpPassField[0].value === inpPassField[1].value) {
      btnPass.innerHTML = 'Ok';
    }
  })

}

passHandler();
