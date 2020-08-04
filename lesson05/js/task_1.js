'use strict';

/*3. a. Сделайте модальное (появляющееся и исчезающее) окно
b. (не обязательное задание) Сделайте анимацию при появлении и исчезании. Анимации можно взять здесь:
1. https://github.com/miniMAC/magic (демо https://www.minimamente.com/project/magic/ )
2. https://github.com/daneden/animate.css (демо https://daneden.github.io/animate.css/ )
3. http://animista.net/
*/

/**
 * Объект модального окна
 */
let modalWindow = {
    /**
     * Инициализация, сохранение данных в свойства объекта, запуск слушателя событий
     */
    init() {
        this.body = document.body;
        this.container = document.querySelector('.container');
        this.modal = document.querySelector('.modal');
        this.button = document.querySelector('.modal-window-button');
        this.button_value =  document.querySelector('.modal-window-button').innerHTML;
        this.activateEventListener();
    },

    /**
     * Слушатель событий, при клике запускает метод переключения классов и генрации тексста в кнопку
     */
    activateEventListener() {
        this.button.addEventListener('click', function () {
            modalWindow.toggleClasses();
            modalWindow.innerButtonContent();
        })
    },

    /**
     * Переключение классов
     */
    toggleClasses() {
        // Анимация открытия модального окна
        this.modal.classList.toggle( 'rotate-hor-center');
        // Если анимации открытия нет, добавляется анимация закрытия, затем через 0.5 сек удаляется
        // и переключаются классы (toggleClasses2()) со стилями отвечающие за фон и оформление модального окна
        if (!this.modal.classList.contains( 'rotate-hor-center')) {
            this.modal.classList.toggle( 'scale-out-center');
            setTimeout(function () {
                modalWindow.modal.classList.toggle( 'scale-out-center');
                modalWindow.toggleClasses2();
            }, 500)
        } else {
            this.toggleClasses2();
        }
    },

    /**
     * Переключение классов. Некоторые перенесены сюда с основного метода, чтобы не дублировать код
     */
    toggleClasses2() {
        this.body.classList.toggle('modal-window__bg-gray');
        this.container.classList.toggle('modal-window__bg-opacity');
        this.modal.classList.toggle('modal-window');
        this.modal.classList.toggle( 'modal-window_flex-pos');
    },

    /**
     * Генерация текста в кнопку
     */
    innerButtonContent() {
        this.button.innerHTML === this.button_value ?
            this.button.innerHTML = 'Закрыть модальное окно' :
            this.button.innerHTML = this.button_value
    }
};

/**
 * При загрузке DOM структуры запускает объект модального окна
 */
document.addEventListener("DOMContentLoaded", function () {
    modalWindow.init()
});
