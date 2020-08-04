'use strict';

/*5. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему
желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

6. (усложненное задание, делайте по желанию) Заполнить созданную таблицу фигурами, фигуры должны выглядеть
как картинки, либо можно использовать символы (существуют символы шахматных фигур) причем все фигуры
должны стоять на своих местах и быть соответственно черными и белыми.
*/
/**
 * Генерирует шахматную доску с фигурами, внутри контейнера (класса) переданного методу init
 */
const chessboardGenerator = {
    cellNames: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    chessFigures: {
        whiteKing: '&#9812',
        whiteQueen: '&#9813',
        whiteRook: '&#9814',
        whiteElephant: '&#9815',
        whiteHorse: '&#9816',
        whitePawn: '&#9817',
        blackKing: '&#9818',
        blackQueen: '&#9819',
        blackRook: '&#9820',
        blackElephant: '&#9821',
        blackHorse: '&#9822',
        blackPawn: '&#9823',
    },

    /**
     * Запуск, записывает DOM контейнера, запускает генерацию доски, запускает генерацию фигур внутри доски
     * @param className Класс - контейнер для шахматной доски
     */
    init(className) {
        this.container = document.querySelector(className);
        this.container.innerHTML = this.getChessboard();
        this.placeFigure(this.chessFigures);
    },

    /**
     * Генерирует и возвращает шахматную доску с меткой ячеек по data-x (строкам) и data-y (столбцам)
     * и расстановкой классов со стилями
     * @returns {string}
     */
    getChessboard() {
        let board = '';
        for (let y = 0; y < 10; y++) {
            board += '<tr>';
            for (let x = 0; x < 10; x++) {
                if (y === 0 && x > 0 && x < 9) {
                    board += `<td class="name-cells name-cells__invert" data-x="${x}" data-y="${y}">${this.cellNames[x - 1]}</td>`;
                } else if (y === 9 && x > 0 && x < 9) {
                    board += `<td class="name-cells" data-x="${x}" data-y="${y}">${this.cellNames[x - 1]}</td>`;
                } else if (x === 0 && y > 0 && y < 9) {
                    board += `<td class="num-cells" data-x="${x}" data-y="${y}">${9 - y}</td>`;
                } else if (x === 9 && y > 0 && y < 9) {
                    board += `<td class="num-cells num-cells__invert" data-x="${x}" data-y="${y}">${9 - y}</td>`;
                } else if (x === 0 || x === 9 || y === 0 || y === 9) {
                    board += `<td class="name-cells" data-x="${x}" data-y="${y}"></td>`;
                } else if ((x % 2 !== 0 && y % 2 !== 0) || (x % 2 === 0 && y % 2 === 0)) {
                    board += `<td class="bg__white" data-x="${x}" data-y="${y}"></td>`;
                } else {
                    board += `<td class="bg__black" data-x="${x}" data-y="${y}"></td>`;
                }
            }
            board += '</tr>';
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    /**
     * Расставляет начальные позиции фигур на шахматной доске в зависимости от данных в data-x и data-y
     * @param chessFigures Объект с символами шахматных фигур
     */
    placeFigure(chessFigures) {
        this.container.querySelectorAll('td').forEach(function (cell) {
            // Черные фигуры
            if ((cell.dataset.x === '1' || cell.dataset.x === '6') && cell.dataset.y === '1') {
                cell.innerHTML = chessFigures.blackRook
            } else if ((cell.dataset.x === '2' || cell.dataset.x === '7') && cell.dataset.y === '1') {
                cell.innerHTML = chessFigures.blackHorse
            } else if ((cell.dataset.x === '3' || cell.dataset.x === '8') && cell.dataset.y === '1') {
                cell.innerHTML = chessFigures.blackElephant
            } else if (cell.dataset.x === '4' && cell.dataset.y === '1') {
                cell.innerHTML = chessFigures.blackQueen
            } else if (cell.dataset.x === '5' && cell.dataset.y === '1') {
                cell.innerHTML = chessFigures.blackKing
            } else if (cell.dataset.x >= '1' && cell.dataset.x <= '8' && cell.dataset.y === '2') {
                cell.innerHTML = chessFigures.blackPawn
            }

            // Белые фигуры
            if ((cell.dataset.x === '1' || cell.dataset.x === '6') && cell.dataset.y === '8') {
                cell.innerHTML = chessFigures.whiteRook
            } else if ((cell.dataset.x === '2' || cell.dataset.x === '7') && cell.dataset.y === '8') {
                cell.innerHTML = chessFigures.whiteHorse
            } else if ((cell.dataset.x === '3' || cell.dataset.x === '8') && cell.dataset.y === '8') {
                cell.innerHTML = chessFigures.whiteElephant
            } else if (cell.dataset.x === '4' && cell.dataset.y === '8') {
                cell.innerHTML = chessFigures.whiteQueen
            } else if (cell.dataset.x === '5' && cell.dataset.y === '8') {
                cell.innerHTML = chessFigures.whiteKing
            } else if (cell.dataset.x >= '1' && cell.dataset.x <= '8' && cell.dataset.y === '7') {
                cell.innerHTML = chessFigures.whitePawn
            }
        });
    }
};

/**
 * При загрузке DOM структуры запускает объект генерации шахматной доски с фигурами
 */
document.addEventListener("DOMContentLoaded", function () {
    chessboardGenerator.init('.chess-container');
});
