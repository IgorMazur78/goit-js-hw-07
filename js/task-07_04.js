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
let counter;
// Создаем функцию increment и
//  для увеличения  значения счетчика
const increment = () => {
  counter = value + 1;
  value.textContent = counter;
};
// Добавляем слушатели кликов на кнопки,
// вызовы функций и обновление
// интерфейса
buttonIncrement.addEventListener("click", increment);
// Создаем функцию decrement для
//  уменьшения значения счетчика
const decrement = () => {
  if (counter > 0) {
    counter = value - 1;
  } else {
    counter = 0;
  }
  value.textContent = counter;
};
// Добавляем слушатели кликов на кнопки,
// вызовы функций и обновление
// интерфейса
buttonDecrement.addEventListener("click", decrement);
// ============================
// 'use strict';

// const refs = {
//   counter: document.querySelector("#counter"),
//   value: document.querySelector("#value"),
// };

// const actions = {
//   state: {
//     value: 0,
//   },
//   decrement() {
//     this.state.value -= 1;
//   },
//   increment() {
//     this.state.value += 1;
//   },
// };

// const changeValue = ({ target }) => {
//   actions[target.dataset.action]();
//   refs.value.textContent = actions.state.value;
// };

// refs.counter.addEventListener("click", changeValue);
