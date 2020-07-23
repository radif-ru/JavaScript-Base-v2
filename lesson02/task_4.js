'use strict';

// Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

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

function alertNums(a) {
    switch (a) {
        case 1:
            alert(a++);
        case 2:
            alert(a++);
        case 3:
            alert(a++);
    }
}

let a = getRandomInt(0, 16);
alertNums(a);
