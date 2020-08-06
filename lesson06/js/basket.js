const basket = {
    init() {
        this.goodsContainer = document.querySelector('.goods-container');
        this.basket = document.querySelector('.basket');
        this.basketGoods = this.basket.querySelector('.basket-goods');
        this.basketGoodsTitle = this.basketGoods.querySelector('.basket-goods-title');
        this.basketGoodsTotal = this.basketGoods.querySelector('.basket-goods-total');

        this.addEventClickGoodButton()
    },

    addEventClickGoodButton() {
        this.goodsContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('good-button')) {
                this.addGoodInBasket(event);
                this.addTotalPrice();
            }
        })
    },

    addGoodInBasket(event) {
        let id = event.target.dataset.id;
        let price = event.target.dataset.price;
        let name = event.target.dataset.name;

        let removeButton = this.basketGoods.querySelector(`.removeButton[data-id="${id}"]`);
        if (removeButton === null) {
            let good = document.createElement('div');
            good.classList.add('basket-goods-good');
            good.innerHTML += `
                <div class="basket-goods-good">
                    <span class="goodId">${id}</span>
                    <span class="goodName">${name}</span>
                    <span><span class="goodPrice">${price}</span>р</span>
                    <span class="goodQuantity">1</span>
                    <span class="removeButton" data-id="${id}">&#10008;</span>
                </div>`;
            this.basketGoodsTotal.insertAdjacentElement("beforebegin", good);
            this.addEventClickRemoveButton(id);
        } else {
            let good = removeButton.parentNode;
            good.querySelector('.goodPrice').innerHTML = price;
            good.querySelector('.goodQuantity').innerHTML = +good.querySelector('.goodQuantity').innerHTML + 1;
        }
    },

    addTotalPrice () {
        let total = 0;
        let quantity = 0;
        this.basketGoods.querySelectorAll('.basket-goods-good').forEach((good) => {
            total += +good.querySelector('.goodPrice').innerHTML *
                +good.querySelector('.goodQuantity').innerHTML
        });
        this.basketGoodsTotal.innerHTML = `<span>Итого: </span><span><span>${total}</span>р</span>`
    },

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
    basket.init()
});
