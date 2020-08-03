/*3. a. Сделайте модальное (появляющееся и исчезающее) окно
b. (не обязательное задание) Сделайте анимацию при появлении и исчезании. Анимации можно взять здесь:
1. https://github.com/miniMAC/magic (демо https://www.minimamente.com/project/magic/ )
2. https://github.com/daneden/animate.css (демо https://daneden.github.io/animate.css/ )
3. http://animista.net/
*/

let modalWindow = {
    init() {
        this.body = document.body;
        this.container = document.querySelector('.container');
        this.modal = document.querySelector('.modal');
        this.button = document.querySelector('.modal-window-button');
        this.button_value =  document.querySelector('.modal-window-button').innerHTML;
        this.activateEventListener();
    },

    activateEventListener() {
        this.button.addEventListener('click', function () {
            modalWindow.toggleClasses();
            modalWindow.innerButtonContent();
        })
    },

    toggleClasses() {
        this.body.classList.toggle('modal-window__bg-gray');
        this.container.classList.toggle('modal-window__bg-opacity');
        this.modal.classList.toggle('modal-window');
        this.modal.classList.toggle( 'modal-window_flex-pos');
        this.modal.classList.toggle( 'rotate-hor-center');
    },

    innerButtonContent() {
        this.button.innerHTML === this.button_value ?
            this.button.innerHTML = 'Закрыть модальное окно' :
            this.button.innerHTML = this.button_value
    }

};

document.addEventListener("DOMContentLoaded", function () {
    modalWindow.init()
});