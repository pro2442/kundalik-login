let tumbler = document.querySelector(".header-localization-select__info");
let dropdown = document.querySelector(".dropdown-container");
let menuShown = false;

tumbler.addEventListener('click', function () {
  if (menuShown) {
    dropdown.style.display = 'none';
    menuShown = false;
  } else {
    dropdown.style.display = 'block';
    menuShown = true;
  }
})

let tumbler2 = document.querySelector(".header-localization-select__info2");
let dropdown2 = document.querySelector(".dropdown-containerr");

tumbler2.addEventListener('click', function () {
  if (menuShown) {
    dropdown2.style.display = 'none';
    menuShown = false;
  } else {
    dropdown2.style.display = 'block';
    menuShown = true;
  }
})