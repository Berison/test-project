"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Swiper 
var swiperOffer = new Swiper('.swiper-offer', {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-offer .swiper-button-next",
    prevEl: ".swiper-offer .swiper-button-prev"
  },
  pagination: {
    el: ".offer .swiper-pagination",
    clickable: true
  }
}); // Burger

var burgerBtn = document.querySelector('.header .burger'),
    menuMob = document.querySelector('.header-inner__list');

var addActive = function addActive() {
  for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  items.forEach(function (elem) {
    return elem.classList.add('active');
  });
};

var removeActive = function removeActive() {
  for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    items[_key2] = arguments[_key2];
  }

  items.forEach(function (elem) {
    return elem.classList.remove('active');
  });
};

burgerBtn.addEventListener('click', function () {
  return menuMob.classList.contains('active') ? removeActive(burgerBtn, menuMob, document.body, document.documentElement) : addActive(burgerBtn, menuMob, document.body, document.documentElement);
}); // Anchor links menu

var allLinksHeader = document.querySelectorAll('.header-inner__list button, .footer-inner__list button');
allLinksHeader.forEach(function (elem) {
  elem.addEventListener('click', function () {
    removeActive(burgerBtn, menuMob, document.body, document.documentElement);
    document.querySelector(elem.dataset.href).scrollIntoView({
      behavior: 'smooth'
    });
  });
}); // Fixed menu

var menu = document.querySelector('.header');

var changeMenu = function changeMenu() {
  return window.scrollY == 0 ? menu.classList.remove('scroll') : menu.classList.add('scroll');
};

changeMenu();
window.addEventListener('scroll', changeMenu); // Validate form

var errorsIcon = '<svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11C2.464 11 0 8.536 0 5.5C0 2.464 2.464 0 5.5 0C8.536 0 11 2.464 11 5.5C11 8.536 8.536 11 5.5 11ZM5.5 2.75C5.1975 2.75 4.95 2.9975 4.95 3.3V5.5C4.95 5.8025 5.1975 6.05 5.5 6.05C5.8025 6.05 6.05 5.8025 6.05 5.5V3.3C6.05 2.9975 5.8025 2.75 5.5 2.75ZM4.95 8.25V7.15H6.05V8.25H4.95Z" fill="#F61067"/></svg>';

var validateName = function validateName() {
  var elem = document.querySelector('.name-label input'),
      parent = elem.parentElement;

  if (elem.value.length < 3) {
    parent.classList.add('error');
    parent.classList.remove('success');
    parent.querySelector('.error').innerHTML = "".concat(errorsIcon, " <p>\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043C\u0456\u043D\u0456\u043C\u0443\u043C 3 \u0441\u0438\u043C\u0432\u043E\u043B\u0438</p>");
    return false;
  } else {
    parent.classList.remove('error');
    parent.classList.add('success');
    parent.querySelector('.error').innerHTML = '';
    return true;
  }
};

var validateEmail = function validateEmail() {
  var elem = document.querySelector('.email-label input'),
      reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      parent = elem.parentElement;

  if (elem.value.match(reg)) {
    parent.classList.remove('error');
    parent.classList.add('success');
    parent.querySelector('.error').innerHTML = '';
    return true;
  } else {
    parent.classList.add('error');
    parent.classList.remove('success');
    parent.querySelector('.error').innerHTML = "".concat(errorsIcon, " <p>\u041D\u0435 \u0432\u0456\u0440\u043D\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u043F\u043E\u0447\u0442\u0438</p>");
    return false;
  }
}; // Mask phone


var maskPhone = function maskPhone(event) {
  var keyCode;
  event.keyCode && (keyCode = event.keyCode);
  var pos = event.target.selectionStart;
  if (pos < 3) event.preventDefault();
  var matrix = "+38 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = event.target.value.replace(/\D/g, ""),
      newValue = matrix.replace(/[_\d]/g, function (a) {
    return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
  });
  i = newValue.indexOf("_");

  if (i != -1) {
    i < 5 && (i = 3);
    newValue = newValue.slice(0, i);
  }

  var reg = matrix.substr(0, event.target.value.length).replace(/_+/g, function (a) {
    return "\\d{1," + a.length + "}";
  }).replace(/[+()]/g, "\\$&");
  reg = new RegExp("^" + reg + "$");
  if (!reg.test(event.target.value) || event.target.value.length < 5 || keyCode > 47 && keyCode < 58) event.target.value = newValue;
  if (event.type == "blur" && event.target.value.length < 5) event.target.value = "";
};

document.querySelectorAll('.phone-label input').forEach(function (elem) {
  return elem.addEventListener("input", maskPhone, false);
});
document.querySelectorAll('.phone-label input').forEach(function (elem) {
  return elem.addEventListener("focus", maskPhone, false);
});
document.querySelectorAll('.phone-label input').forEach(function (elem) {
  return elem.addEventListener("blur", maskPhone, false);
});
document.querySelectorAll('.phone-label input').forEach(function (elem) {
  return elem.addEventListener("keydown", maskPhone, false);
}); // Submit form

var formInner = document.querySelectorAll('.help-inner__form > form'),
    popupThank = document.querySelector('.success-popup'),
    closePopupThank = document.querySelector('.success-popup .close'),
    overlay = document.querySelector('.overlay');
formInner.forEach(function (elem) {
  return elem.addEventListener('submit', function (e) {
    var allInpts = e.target.querySelectorAll('.label-inner input');
    allInpts.forEach(function (el) {
      if (el.value.length > 64) {
        el.parentElement.querySelector('.error').innerHTML = 'Завелика кількість знаків';
      } else {
        el.parentElement.querySelector('.error').innerHTML = '';
      }
    });

    if (validateName() && validateEmail()) {
      addActive(popupThank, overlay, document.body, document.documentElement);
      closePopupThank.addEventListener('click', function () {
        return removeActive(popupThank, overlay, document.body, document.documentElement);
      }); // For analitics
      // setTimeout(()=>{
      //   document.location.href = '?thank';
      // }, 2000)
    }
  });
});
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBAst16pChZK7yjmJFhFj1BbvM0REeJNMw&callback=initMap';

window.initMap = function () {
  var myLatLng = {
    lat: 49.8327787,
    lng: 23.9421962
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 16
  });
  new google.maps.Marker({
    position: myLatLng,
    map: map
  });
};

document.head.appendChild(script); // Map logic info

var listItemsMap = document.querySelectorAll('.contacts-inner__item'),
    listItemTitle = document.querySelectorAll('.contacts-inner__item .info'),
    handleListItemTitle = document.querySelector('.map-info strong');
listItemsMap.forEach(function (elem, index) {
  elem.addEventListener('click', function () {
    removeActive.apply(void 0, _toConsumableArray(listItemsMap));
    addActive(elem);
    handleListItemTitle.innerHTML = listItemTitle[index].innerHTML;

    if (window.outerWidth <= 1024) {
      document.getElementById("map").scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}); // Dynamic date

var dateFooterSpan = document.querySelector('.copyright .date');
dateFooterSpan.innerHTML = new Date().getFullYear();