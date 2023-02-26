'use strict';

const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');
const overlay = document.querySelector('.overlay');
const btnCloseModal1 = document.querySelector('.close-modal-1');
const btnCloseModal2 = document.querySelector('.close-modal-2');
const btnCloseModal3 = document.querySelector('.close-modal-3');
const btnsOpenModal1 = document.querySelector('.show-modal-1');
const btnsOpenModal2 = document.querySelector('.show-modal-2');
const btnsOpenModal3 = document.querySelector('.show-modal-3');
btnsOpenModal1.addEventListener('click', function () {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
btnsOpenModal2.addEventListener('click', function () {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
btnsOpenModal3.addEventListener('click', function () {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
btnCloseModal1.addEventListener('click', function () {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
});
btnCloseModal2.addEventListener('click', function () {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
});
btnCloseModal3.addEventListener('click', function () {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
});
overlay.addEventListener('click', function () {
  modal1.classList.add('hidden');
  modal2.classList.add('hidden');
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal1.classList.contains('hidden')) {
      modal1.classList.add('hidden');
      modal2.classList.add('hidden');
      modal3.classList.add('hidden');
      overlay.classList.add('hidden');
    }
    if (!modal2.classList.contains('hidden')) {
      modal1.classList.add('hidden');
      modal2.classList.add('hidden');
      modal3.classList.add('hidden');
      overlay.classList.add('hidden');
    }
    if (!modal3.classList.contains('hidden')) {
      modal1.classList.add('hidden');
      modal2.classList.add('hidden');
      modal3.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
