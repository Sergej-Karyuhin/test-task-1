const section_1 = document.querySelector('.section-1');
const section_2 = document.querySelector('.section-2');
const section_3 = document.querySelector('.section-3');
const section_4 = document.querySelector('.section-4');

const BUTTON_SECTION_1 = document.querySelector('#section_1_button');
const BUTTON_SECTION_2 = document.querySelector('#section_2_button');
const FORM_SECTION_3 = document.querySelector('.section-3__form');

function showSection2() {
  section_2.style.display = 'block';
  section_2.scrollIntoView();
}
function showSection3() {
  section_3.style.display = 'block';
  section_3.scrollIntoView();
}
function showSection4() {
  section_1.style.display = 'none';
  section_2.style.display = 'none';
  section_3.style.display = 'none';
  section_4.style.display = 'block';
}
function checkName(key) {
  return (key >= 'а' && key <= 'я') || (key >= 'А' && key <= 'Я') || (event.keyCode == 8);
}
function checkPhone(key) {
  return (key >= '0' && key <= '9') || (event.keyCode == 8) || (event.keyCode == 107 || event.keyCode == 187);
}



section_2.style.display = 'none';
section_3.style.display = 'none';
section_4.style.display = 'none';
BUTTON_SECTION_1.addEventListener('click', showSection2);
BUTTON_SECTION_2.addEventListener('click', showSection3);
FORM_SECTION_3.addEventListener('submit', function(e) {
  e.preventDefault();
  showSection4();
});
