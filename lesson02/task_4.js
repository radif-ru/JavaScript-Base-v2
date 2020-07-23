'use strict';

// Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
// параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
// и возвращать результат.
// Обязательно использовать оператор return.

/**
 * Функция операций над числами
 * @param {number} num_1 Первое число
 * @param num_2 Второе число
 * @param operation Знак или название операции
 * @returns {number|*} Результат операции над числами num_1 и num_2
 */
function getNumbersOperation(num_1, num_2, operation='+') {
    switch (operation) {
        case "+" || 'sum':
            return num_1 + num_2;
        case '-' || 'difference' || 'dif':
            return num_1 - num_2;
        case '/' || 'division' || 'div':
            return num_1 / num_2;
        case '*' || 'multiplication' || 'mult':
            return num_1 * num_2;
    }
}

let num_1 = +prompt('Введите первое число');
let num_2 = +prompt('Введите второе число');
let operation = prompt('Введите операцию (+, -, /, *)');

alert(`Результат: ${getNumbersOperation(num_1, num_2, operation)}`);
