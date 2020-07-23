'use strict';

let celsius_temperature = +prompt('Введите температуру по Цельсию');
let fahrenheit_temperature = (9 / 5) * celsius_temperature + 32;
let sign = '';
if (fahrenheit_temperature > 0)
    sign = '+';

alert(`Температура по Фаренгейту: ${sign}${fahrenheit_temperature} °F`);
