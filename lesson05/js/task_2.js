'use strict';

/*4. Сделайте несколько карточек товара, примерно такого вида:
При нажатии на кнопку «Подробнее» вместо картинки должен появляться текст с описанием товара, примерно так:
Подсказки:
1. Имейте в виду, что назначить обработку события можно по отдельности каждому элементу, а не всем
сразу, т.е., например, для этих кнопок:
const buttons = document.querySelectorAll('button');
мы не можем написать:
buttons.addEventListener('click', function() {});
т.к. это коллекция, а не одна конкретная кнопка, воспользуйтесь например методом forEach
https://mzl.la/1AOMMWX
2. С помощью querySelector можно искать не только в документе, но и внутри какого-то элемента,
например: https://codepen.io/IgorKubikov/pen/arWKyz?editors=1010

3. У объекта события MouseEvent, которое происходит при клике есть свойство target, которое указывает на
каком элементе произошел клик, а у него в свою очередь есть свойство parentNode, которое содержит родительский
элемент. Подробнее: https://codepen.io/IgorKubikov/pen/arWKpo?editors=1010
*/

/**
 * Класс, создающий обект с товаром, который обрабатывает переданное событие,
 * на основе изменения классов со стилями реагирует на действия пользователя
 */
class ImageInText {
    constructor(event) {
        this.button = event.target;
        this.desc = event.target.parentNode.querySelector('.desc');
        this.img = event.target.parentNode.querySelector('img');
    }

    /**
     * Переключение классов для стилей
     */
    init() {
        if (this.desc.classList.contains('display_none')) {
            this.desc.classList.toggle('display_none');
            this.img.classList.toggle('display_none');
            this.button.innerHTML = 'Отмена';
        } else {
            this.desc.classList.toggle('display_none');
            this.img.classList.toggle('display_none');
            this.button.innerHTML = 'Подробнее'
        }
    }
}

/**
 * Генерирует продукты внутри контейнера (переданноо класса)
 * @param productContainer Контейнер, переданный класс
 * @param quantity Количество генерируемых товаров
 */
function htmlGenerate(productContainer, quantity = 3) {
    for (let i = 0; i < quantity; i++) {
        productContainer.innerHTML += `
            <div class="product">
            <div class="productName">Product ${i + 1} name</div>
            <div class="desc display_none">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. At esse libero mollitia omnis quod 
                quos sint tempore ut. Animi architecto atque consectetur fuga, harum inventore, 
                laborum magni nobis omnis sed similique ut vel! A asperiores dicta, doloribus error eveniet 
                ipsa magni nihil nobis pariatur quibusdam rem similique soluta vero voluptatem!
            </div>
            <img class="product-img" src="http://placeimg.com/640/480/any" alt="image">
            <button>Подробнее</button>
        </div>
        `
    }
}

const productContainer = document.querySelector('.product-container');
htmlGenerate(productContainer, 5);
const products = productContainer.querySelectorAll('.product');

/**
 * Вешает слушатели событий на кнопки товаров, при нажатии генерирует объект и вызывает его,
 * передает событие в объект
 */
products.forEach(function (product) {
    product.querySelector('button').addEventListener('click', function (event) {
        let productButton = new ImageInText(event);
        productButton.init();
    })
});
