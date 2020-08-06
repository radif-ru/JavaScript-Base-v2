'use strict';

/**
 * Объект вешает обработчики событий для корзины и товаров, считает количество выбранных товаров
 */
const basketAndGoods = {
    /**
     * Находит и записывает DOM элементы контейнера товаров, корзины, элементов корзины в свойства,
     * запускает методы обрабатывающие клики по кнопкам товаров и кнопке открытия корзины
     */
    init() {
        this.goodsContainer = document.querySelector('.goods-container');
        this.basket = document.querySelector('.basket');
        this.basketButton = this.basket.querySelector('.basket-button');
        this.basketGoods = this.basket.querySelector('.basket-goods');
        this.basketGoodsTotal = this.basketGoods.querySelector('.basket-goods-total');

        this.addEventClickBasketButton();
        this.addEventClickGoodButton();
    },

    /**
     * Обработчик для кнопки корзины. Делает видимой корзину при нажатии или скрывает
     */
    addEventClickBasketButton() {
        this.basketButton.addEventListener('click', () => {
            this.basketGoods.style.display === 'none' ?
                this.basketGoods.style.display = 'block' :
                this.basketGoods.style.display = 'none'
        });
    },

    /**
     * Обработчик вешается на кнопки с товарами, вызывает метод добавления товара в корзину
     * и метод подсчёта итоговой стоимости товаров
     */
    addEventClickGoodButton() {
        this.goodsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('good-button')) {
                this.addGoodInBasket(event);
                this.addTotalPrice();
            }
        })
    },

    /**
     * Добавляет товар в корзину, для кнопки удаления товара вызывает метод, обрабатывающий нажатия
     * @param event Событие клика на кнопку товара, где в дата атрибутах хранятся id, цена, название товара
     */
    addGoodInBasket(event) {
        let id = event.target.dataset.id;
        let price = event.target.dataset.price;
        let name = event.target.dataset.name;

        // Кнопка удаления товара, если её нет, записывает null в пременную
        let removeButton = this.basketGoods.querySelector(`.removeButton[data-id="${id}"]`);
        // Если кнопки нет, значит товара, нет - добавляет товар в корзину - заполненная html разметка перед Итого
        if (removeButton === null) {
            let good = document.createElement('div');
            good.classList.add('basket-goods-good');
            good.innerHTML += `
<span class="goodId">${id}</span>
<span class="goodName">${name}</span>
<span><span class="goodPrice">${price}</span>р</span>
<span class="goodQuantity">1</span>
<span class="removeButton" data-id="${id}">&#10008;</span>`;
            this.basketGoodsTotal.insertAdjacentElement("beforebegin", good);
            this.addEventClickRemoveButton(id);
            // Если товар есть просто обновляет количество товаров
        } else {
            let good = removeButton.parentNode;
            good.querySelector('.goodQuantity').innerHTML = +good.querySelector('.goodQuantity').innerHTML + 1;
        }
    },

    /**
     * Подсчёт итоговой стоимости, вызывается после добавления или удаления товара
     * Перебирает все товары, умножает на их количество и складывает в итоговую суммму
     */
    addTotalPrice() {
        let total = 0;
        this.basketGoods.querySelectorAll('.basket-goods-good').forEach((good) => {
            total += +good.querySelector('.goodPrice').innerHTML *
                +good.querySelector('.goodQuantity').innerHTML
        });
        this.basketGoodsTotal.innerHTML = `<span>Итого: </span><span><span>${total}</span>р</span>`
    },

    /**
     * Обрабатывает нажатия на иконку удаления товара, по переданному id вешает обработчик на конкретную кнопку
     * при нажатии уменьшает количество товаров, если однотипных товаров меньше 1, удаляет DOM элемент с этим товаром
     * после удаления запускает метод подсчёта итоговой стоимости товаров
     * @param id ID кнопки нового типа товаров в корзинет
     */
    addEventClickRemoveButton(id) {
        this.basketGoods.querySelector(`.removeButton[data-id="${id}"]`).addEventListener('click', (event) => {
            let good = event.target.parentNode;
            let quantityHtml = good.querySelector('.goodQuantity');
            let quantity = +quantityHtml.innerHTML;
            if (quantity > 1) {
                quantityHtml.innerHTML = quantity - 1;
            } else {
                good.parentNode.removeChild(good);
            }
            this.addTotalPrice();
        });
    },
};

document.addEventListener("DOMContentLoaded", () => {
    basketAndGoods.init()
});

