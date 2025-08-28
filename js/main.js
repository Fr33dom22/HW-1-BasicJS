"use strict";

//Min

// 1. Створення змінних для імені та прізвища
let firstName = "Олексій";
let lastName = "Харакоз";
const middleName = "Андрійович";
var nickName = "Freedom";

// Неправильні імена (закоментовані)
// let 1name = "Олексій"; // не може починатися з числа
// let first-name = "Олексій"; // дефіс не дозволено
// let alert = "Що це?"; // зарезервоване слово
// let my name = "Олексій"; // пробіл не дозволено
// let @name = "Олексій"; // спеціальні символи не дозволено

// 2. Коментарі
// Однорядковий коментар
/* 
Багаторядковий коментар
*/

// 3. Стилі написання імен змінних
let camelCaseExample = "camelCase";
let snake_case_example = "snake_case";
let PascalCaseExample = "PascalCase";
let UPPERCASE_EXAMPLE = "UPPERCASE";

//Norm — теперь всё выполняется по кнопке
const greetBtn = document.getElementById("greetBtn");

greetBtn.addEventListener("click", function () {
  let userName = prompt("Введіть своє ім'я:");
  alert(`Привіт, ${userName}!`);

  const CURRENT_YEAR = 2025;
  let birthYear = parseInt(prompt("Введіть свій рік народження:"));
  let age = CURRENT_YEAR - birthYear;
  alert(`Вам ${age} років.`);

  let sideLength = parseFloat(prompt("Введіть довжину сторони квадрата:"));
  let perimeter = sideLength * 4;
  alert(`Периметр квадрата: ${perimeter}`);
});
