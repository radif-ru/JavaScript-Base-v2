'use strict';

/**
 * Класс для создания объекта загадки
 */
class Riddle {
    constructor(riddle) {
        this.riddle = riddle.riddle;
        this.options = riddle.options;
        this.correct = riddle.correct;
        this.random_options = [];
    }

    /**
     * Возвращает готовую загадку с описанием и вариантами ответов
     * @returns {string}
     */
    get getOptions() {
        this.random_options = [];
        let option = `${this.riddle} \n`;
        for (let key in this.options) {
            let random = this.getRandomPositionResponses();
            option += `${config.identify_list[key]}. ${this.options[random]}\n`;
        }
        option += '\nВведите идентификатор ответа\nДля выхода наберите "exit" или нажмите "Отмена"';
        return option
    }

    /**
     * Возвращает случайные позиции ответов загадок
     * @returns {number|undefined}
     */
    getRandomPositionResponses() {
        let max = Math.floor(this.options.length);
        let random = Math.floor(Math.random() * max);
        if (this.random_options.indexOf(random) === -1) {
            this.random_options.push(random);
            return random;
        } else if (!(this.random_options.length === this.options.length)) {
            return this.getRandomPositionResponses()
        }
    }
}
