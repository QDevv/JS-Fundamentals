'use strict';
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (let i = 0; i < showModal.length; i++) {
  //   console.log(showModal[i].textContent);
  showModal[i].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const hideModal = hidden => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

closeModal.addEventListener('click', hideModal);

overlay.addEventListener('click', hideModal);

document.addEventListener('keydown', function (e) {
  //   console.log('a key was pressed');
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
