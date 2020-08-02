'use strict';

/*3** (это задание по желанию). На базе игры (приняв за пример), созданной в
дополнительных видео, реализовать игру «Кто хочет стать миллионером?».
Т.е. у вас должен быть главный объект, содержащий всю логику игры, который будет иметь методы,
например
метод run, возможно метод init и т.д.
В игре должны быть заранее подготовлены список вопросов и ответов (как минимум 5 вопросов).
Игра должна приветствовать пользователя, после чего задавать вопросы пользователю и предлагать
варианты
ответов в виде теста, например:
Сколько букв в слове "привет":
a. Пять.
b. Шесть.
c. Семь.
d. Куда я попал?
Проверять правильный вариант выбрал пользователь или нет, необходимо вести счет.
По окончании игры, когда было задано 5 вопросов, вы должны сообщить пользователю его счет и
предложить
сыграть снова.
Также должна быть возможность выхода из игры заранее, если пользователю надоело играть.
*/

let game = {
    /**
     * Приветствие, запуск игры
     */
    init() {
        alert('Добро пожаловть в игру «Кто хочет стать миллионером?».');
        this.run();
    },

    /**
     * Вызывает создание объекта загадки, запрашивает ответ пользователя, запускает метод проверки ответа
     */
    run() {
        if (player.current_riddle === null) {
            this.getRiddle();
        }
        //Запрашивает ответ пользователя на загадку, если остались
        if (player.riddle_num !== riddles.length) {
            player.user_option = prompt(player.current_riddle.getOptions);
        }
        this.optionValidator(player.current_riddle);
    },

    /**
     * Создаётся объект загадки по случайному номеру из массива загадок
     * @returns {Riddle} - объект созданный на базе класса Riddle
     */
    getRiddle() {
        if (player.riddle_num < riddles.length) {
            this.getRandomPositionRiddles();
            player.current_riddle = new Riddle(riddles[player.riddle_pos]);
        }
    },

    /**
     * Сравнивает ответ игрока с правильным, запускает очередную загадку,
     * если пользователь завершает игру, или закончились загадки выводит счёт
     * @param {Riddle} riddle - объект загадки
     */
    optionValidator(riddle) {
        if (player.user_option === 'exit' ||
            player.user_option === null ||
            player.riddle_num === riddles.length) {
            alert(`Игра окончена. Счёт игрока: ${player.score} из ${riddles.length}`);
            let question = confirm('Сыграем снова?');
            if (question) {
                this.reset();
            }
            return;
        }

        if ((riddle.random_options[config.identify_list.indexOf(player.user_option)] === riddle.correct)) {
            alert('Правильный ответ');
            player.score++;
        } else if (config.identify_list.indexOf(player.user_option) === -1) {
            alert('Данные некорректны, повторите ввод идентификатора ответа без точки в конце');
            this.run();
            return;
        } else {
            alert('Неправильный ответ');
        }

        this.getRiddle();
        player.riddle_num++;
        this.run();
    },

    /**
     * Возвращает случайную загадку
     */
    getRandomPositionRiddles() {
        let max = Math.floor(riddles.length);
        let random = Math.floor(Math.random() * max);
        if (player.solved_riddles.indexOf(random) === -1) {
            player.riddle_pos = random;
            player.solved_riddles.push(player.riddle_pos);
        } else if (!(player.solved_riddles.length === riddles.length)) {
            this.getRandomPositionRiddles()
        }
    },

    /**
     * Обнуление значений игрока и перезапуск игры
     */
    reset() {
        player.score = 0;
        player.riddle_num = 0;
        player.user_option = '';
        player.solved_riddles = [];
        player.riddle_pos = 0;
        player.current_riddle = null;
        this.run();
    },
};

game.init();
