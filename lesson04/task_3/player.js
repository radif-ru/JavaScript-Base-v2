'use strict';

/**
 * Данные игрока.
 *
 * score: number Счёт
 * riddle_num: number Номер отгадываемой загадки (по счёту) * user_option: string Ответ игрока
 * solved_riddles: [] Решённые загадки game.getRandomInt(min, max)
 * riddle_pos: number Номер случайная позиции отгадываемой загадки game.getRandomInt(min, max)
 * current_riddle: null - Объект текущей загадки
 *
 * @type {{score: number,
 * current_riddle: null,
 * riddle_num: number,
 * riddle_pos: number,
 * user_option: string,
 * solved_riddles: []}}
 */
const player = {
    score: 0,
    riddle_num: 0,
    user_option: '',
    solved_riddles: [],
    riddle_pos: 0,
    current_riddle: null,
};
