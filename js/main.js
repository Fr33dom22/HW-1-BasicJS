"use strict";

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
