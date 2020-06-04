"use strict";
//
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
//присваиваем переменной parent значение ingredients
// из html документа
const parent = document.querySelector("#ingredients");
//перебираем массив ingredients и присваиваем
// каждое значение элемента(текст) массива в созданную
//переменную li(document.createElement("li")
const childrens = ingredients.map((e) => {
  const li = document.createElement("li");

  li.textContent = e;
  // выводим результат li
  return li;
});

// в  parent переменную добовляем childrens
// (итог функции map)
parent.append(...childrens);
