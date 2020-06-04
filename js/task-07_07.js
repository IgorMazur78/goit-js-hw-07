"use strict";
// Напиши скрипт, который реагирует
// на изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text
// обновляя свойство font-size. В результате при
// перетаскивании ползунка будет меняться размер текста.
//======================
// обьявляем переменные с значениями html тегов
const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
// функция по изменению шрифта (spanText), где style.fontSize
// найдено значение через  console.dir(  они пусты )

const rangeText = (e) => {
  spanText.style.fontSize = e.target.value + "px";
};
//
// слушатель событий подключает действия через
// обратную функцию rangeText
inputRange.addEventListener("input", rangeText);
