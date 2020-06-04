"use strict";
// Счетчик состоит из спана и кнопок,
//  которые должны увеличивать и
// уменьшать значение счетчика на 1.
//
// Создай переменную counterValue в
//  которой будет хранится текущее
// значение счетчика.
// Создай функции increment и
// decrement для увеличения и
//  уменьшения значения счетчика
// Добавь слушатели кликов на кнопки,
// вызовы функций и обновление
// интерфейса
const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);
// Создаем переменную counterValue в
//  которой будет хранится текущее
// значение счетчика.
const value = document.querySelector("#value");
let counterValue = Number(value.textContent);
// Создаем функцию increment и
//  для увеличения  значения счетчика
const increment = () => {
  counterValue = counterValue + 1;
  value.textContent = counterValue;
};
// Добавляем слушатели кликов на кнопки,
// вызовы функций и обновление
// интерфейса
buttonIncrement.addEventListener("click", increment);
// Создаем функцию decrement для
//  уменьшения значения счетчика
const decrement = () => {
  if (counterValue > 0) {
    counterValue = counterValue - 1;
  } else {
    counterValue = 0;
  }
  value.textContent = counterValue;
};
// Добавляем слушатели кликов на кнопки,
// вызовы функций и обновление
// интерфейса
buttonDecrement.addEventListener("click", decrement);
