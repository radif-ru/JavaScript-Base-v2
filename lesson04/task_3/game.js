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
    init() {
        alert('Добро пожаловть в игру «Кто хочет стать миллионером?».');
        this.run(0)
    },

    run(riddle_num) {
        let riddle = this.getRiddle(riddle_num);
        let userOption = prompt(riddle.getOptions);

        if (this.optionValidator(userOption, riddle.correct)) {
            alert('Правильный ответ');
            player.score++;
            this.run(riddle_num++);
        } else {
            this.run(riddle_num);
        }
        console.log(riddle.getOptions, riddle.correctOption);
    },

    getRiddle(riddle_num) {
        if (num < riddles.length) {
            return new Riddle(riddles[num]);
        } else {
            alert(`Игра окончена. Счёт игрока: ${player.score}`)
        }
    },

    optionValidator(userOption, correct) {
        if (userOption === config.list[correct]) {
            return true;
        }
    }
};

game.init();
