"use strict";
// Напиши скрипт, который бы при потере фокуса
// на инпуте, проверял его
// содержимое на правильное количество символов.
// ===============
// вводим переменную validationInput
// (#validation-input id input в html)
const validationInput = document.querySelector("#validation-input");
// функция на "blur"
const blurInput = (e) => {
  if (e.target.value.length !== 6) {
    validationInput.classList.add("invalid");
  } else {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  }
};
// слушатель событий на  "blur"
validationInput.addEventListener("blur", blurInput);
//
// =============================
//
// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
