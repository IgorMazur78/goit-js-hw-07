"use strict";
// Напиши скрипт, который бы при потере фокуса
// на инпуте, проверял его
// содержимое на правильное количество символов.
// ===============
// вводим переменную validationInput
// (#validation-input id input в html)
const validationInput = document.querySelector("#validation-input");
// функция на "focus"
const focusInput = (e) => {
  e.target.style.borderColor = " black ";
};
// слушатель событий на "focus"
validationInput.addEventListener("focus", focusInput);
// функция на "blur"
const blurInput = (e) => {
  if (e.target.value.length !== 6) {
    e.target.style.borderColor = "red";
  } else {
    e.target.style.borderColor = "green";
  }
};
// слушатель событий на  "blur"
validationInput.addEventListener("blur", blurInput);
