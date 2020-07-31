'use strict';

/**
 * Класс для создания объекта загадки
 */
class Riddle {
    constructor(riddle) {
        this.riddle = riddle.riddle;
        this.options = riddle.options;
        this.correct = riddle.correct;
    }

    /**
     * Возвращает готовую загадку с описанием и вариантами ответов
     * @returns {string}
     */
    get getOptions() {
        let option = `${this.riddle} \n`;
        for (let key in this.options) {
            option += `${config.identify_list[key]}. ${this.options[key]}\n`;
        }
        option += '\nВведите идентификатор ответа\nДля выхода наберите "exit" или нажмите "Отмена"';
        return option
    }

    get correctOption() {
        return `${config.identify_list[this.correct]}. ${this.options[this.correct]}`
    }
}
