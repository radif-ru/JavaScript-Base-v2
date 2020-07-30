'use strict';

// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

/**
 * Функция сложения
 * @param {number} arg1 Первый аргумент
 * @param {number} arg2 Второй аргумент
 * @returns {number} Результат операции
 */
function sumNums(arg1, arg2) {
    return arg1 + arg2;
}

/**
 * Функция вычитания
 * @param {number} arg1 Первый аргумент
 * @param {number} arg2 Второй аргумент
 * @returns {number} Результат операции
 */
function differenceNums(arg1, arg2) {
    return arg1 - arg2;
}

/**
 * Функция деления
 * @param {number} arg1 Первый аргумент
 * @param {number} arg2 Второй аргумент
 * @returns {number} Результат операции
 */
function divisionNums(arg1, arg2) {
    return arg1 / arg2;
}

/**
 * Функция умножения
 * @param {number} arg1 Первый аргумент
 * @param {number} arg2 Второй аргумент
 * @returns {number} Результат операции
 */
function multiplicationNums(arg1, arg2) {
    return arg1 * arg2;
}

let num_1 = +prompt('Введите первое число');
let num_2 = +prompt('Введите второе число');

alert(`Результаты операций над ${num_1} и ${num_2}: 
        \nСумма: ${sumNums(num_1, num_2)} 
        \nРазность: ${differenceNums(num_1, num_2)}
        \nДеление: ${divisionNums(num_1, num_2)}
        \nУмножение: ${multiplicationNums(num_1, num_2)}`);
