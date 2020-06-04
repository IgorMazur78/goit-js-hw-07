"use strict"; //строгий режим
// 1) создали переменную
// 2) записали в нее результат поиска (querySelector)
const category = document.querySelector("ul#categories");
const item = category.querySelectorAll(".item ul");
// переменная с массивом детей для нахождения
// количества категорий
//в нее распиляем псевдомассив category.children
const items = [...category.children];
//// переменная с массивом детей  ul для нахождения
// количества категорий
//в нее распиляем псевдомассив item
const arrayItem2 = [...item];
// вывод в консоль количества категорий
console.log(`'В списке ${category.children.length} категории.'.`);
// вывод в консоль наименований категорий
items.map((e) => console.log(e.firstElementChild.textContent));
// вывод в консоль количества пунктов в списке категорий
arrayItem2.map((e) => console.log(e.children.length));

// то результат поиска querySelectorAll - прежде, чем проводить какие-то
//  манипуляции с элементами по отдельности
// (getAttribute и так далее) - сконвертировать
//  псевдомассив элементов в обычный массив
// (Array.from(elements))
// 3) проводить какие-то операции с результатом
// поиска (элементом), записанным в переменную
// 4) если э
