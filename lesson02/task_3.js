'use strict';

// 3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
// значения.
// Затем написать скрипт, который работает по следующему принципу:
// - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
// Подсказка, чтобы сделать последний пункт можно также попробовать погуглить по запросу
// «получить знак числа javascript»


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
    } else if (((Math.sign(a) > 0) && (Math.sign(b) < 0)) || ((Math.sign(a) < 0) && (Math.sign(b) > 0))) {
        return `а (${a}) и b (${b}) разных знаков, их сумма: ${a + b}`
    } else {
        return `Для чисел а (${a}) и b (${b}) подходящих условий не найдено`
    }
}

let a = getRandomInt(-100, 100);
let b = getRandomInt(-100, 100);

alert(numbersOperation(a, b));
