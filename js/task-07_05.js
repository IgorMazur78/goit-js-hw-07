"use strict";
// Напиши скрипт который, при наборе текста в инпуте
// input#name-input (событие input), подставляет его
// текущее значение в span#name-output. Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.
// ==============================
// прописываем переменные nameInput и nameOutput
// в них значения #name-input и #name-output
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
// функция условия появления надписи в  nameOutput
const updateValue = function (e) {
  if (e.target.value.length !== 0) {
    nameOutput.textContent = e.target.value;
  } else {
    nameOutput.textContent = "незнакомец";
  }
};
// слушатель событий для nameInput
nameInput.addEventListener("input", updateValue);
