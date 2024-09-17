const dropdownItem = document.querySelector('.dropdown-item');
const dropdowArrow = document.querySelector('.production-arrow__img');
dropdownItem.addEventListener('mouseenter', function() {
  dropdowArrow.src = './../img/icons/small-chevron-up.svg';
})
dropdownItem.addEventListener('mouseleave', function() {
  dropdowArrow.src = './../img/icons/small-chevron-down.svg';
})
const mobileNavBtn = document.querySelector('.mobile-menu-open');
const mobileNav = document.querySelector('.mobile-nav')
const mobileBtnImg = document.getElementById('mobileBtnImg');
mobileNavBtn.addEventListener('click', function() {
  mobileNav.classList.toggle('hidden');
  if (!mobileNav.classList.contains('hidden')) {
    mobileBtnImg.src = './../img/icons/mobile/close.svg'
  } else {
    mobileBtnImg.src = './../img/icons/mobile/burger.svg'
  }
})
const mobileProductionElem = document.querySelector('.production-dropdown');
const mobileProductionList = document.querySelector('.mobile-production__list-wrapper');
const mobileProductionArrow = document.querySelector('.mobile-production-arrow')
mobileProductionElem.addEventListener('click', function() {
  mobileProductionList.classList.toggle('hidden');
  if (!mobileProductionList.classList.contains('hidden')) {
    mobileProductionArrow.src = './../img/icons/small-chevron-up.svg'
  } else {
    mobileProductionArrow.src = './../img/icons/small-chevron-down.svg'
  }
})
const contactUsModal = document.getElementById('contactUsModal');
const contactShowModal = document.getElementById('contactUsBtn');
const closeContactUsModal = document.querySelector('.contactUs-modal__close');
if (contactUsModal && contactShowModal && closeContactUsModal) {
  contactShowModal.addEventListener('click', showModal);
  function showModal() {
      contactUsModal.classList.remove('hidden')
  }
  closeContactUsModal.addEventListener('click', closeModal)
  function closeModal() {
      contactUsModal.classList.add('hidden');
  }
document.addEventListener('keydown', closeModalBtn)
  function closeModalBtn (evt) {
    if (evt.key === 'Escape') {
      contactUsModal.classList.add('hidden');
    }
  }
}