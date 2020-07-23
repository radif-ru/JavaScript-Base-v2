'use strict';

// Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения.
// Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.

/**
 * Функция возвращает случайное целое число между min (включительно) и max (не включая max)
 * @param {number} min
 * @param {number} max
 * @returns {number}
 * @see https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Examples
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Функция производит операцию (+, -, *) в зависимости от чисел a и b
 * @param {number} a Первый аргумент
 * @param {number} b Второй аргумент
 * @returns {string} Вернет строку с пояснением и операцией над числаи a и b
 */
function numbersOperation(a, b) {
    if ((a >= 0) && (b >= 0)) {
        return `a (${a}) и b (${b}) положительные, их разность: ${a - b}`
    } else if ((a < 0) && (b < 0)) {
        return `а (${a}) и b (${b}) отрицательные, их произведение: ${a * b}`
    } else {
        return `а (${a}) и b (${b}) разных знаков, их сумма: ${a + b}`
    }
}

let a = getRandomInt(-100, 100);
let b = getRandomInt(-100, 100);

alert(numbersOperation(a, b));
