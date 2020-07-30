'use strict';

// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических
// операций (использовать функции из задания 4) и вернуть полученное значение

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

/**
 * Функция операций над числами
 * @param {number} num_1 Первое число
 * @param {number} num_2 Второе число
 * @param {string} operation Знак или название операции
 * @returns {number} Результат операции над числами num_1 и num_2
 */
function mathOperation(num_1, num_2, operation='+') {
    switch (operation) {
        case "+" || 'sum':
            return sumNums(num_1, num_2);
        case '-' || 'difference' || 'diff':
            return differenceNums(num_1, num_2);
        case '/' || 'division' || 'div':
            return divisionNums(num_1, num_2);
        case '*' || 'multiplication' || 'mult':
            return multiplicationNums(num_1, num_2);
    }
}

let num_1 = +prompt('Введите первое число');
let num_2 = +prompt('Введите второе число');
let operation = prompt('Введите операцию (+, -, /, *)');

alert(`Результат операции "${operation}" над ${num_1} и ${num_2} равен: ${mathOperation(num_1, num_2, operation)}`);
