let mover = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число (1, 2, 3, 4, 6, 7, 8, 9), ' +
                'куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }
            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения по горизонтали и вертикали необходимо ввести одно из чисел 2, 4, 6, 8 ' +
                    '\nДля перемещения по диагонали: 1, 3, 7, 9.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };

        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 2:
                nextPosition.y++;
                break;
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
        // Ниже реализованы ходы по диагонали
            case 8:
                nextPosition.y--;
                break;
            case 7:
                nextPosition.y--;
                nextPosition.x--;
                break;
            case 9:
                nextPosition.y--;
                nextPosition.x++;
                break;
            case 1:
                nextPosition.y++;
                nextPosition.x--;
                break;
            case 3:
                nextPosition.y++;
                nextPosition.x++;
                break;
        }

        return this.NextPositionVerify(nextPosition);
    },

    /**
     * Проверяет возможно ли перемещение на следующую позицию, если нет возвращает исходную
     * @param nextPosition - предлагаемая следующая позиция
     * @returns {{x: number, y: number}|*} - возвращает следующую позицию игрока исходя из условий
     */
    NextPositionVerify(nextPosition) {
        if ((nextPosition.x > config.colsCount - 1) ||
            (nextPosition.x < 0) ||
            (nextPosition.y > config.rowsCount - 1) ||
            (nextPosition.y < 0)) {
            return {
                x: player.x,
                y: player.y,
            };
        } else {
            return nextPosition
        }
    },
};