'use strict';

/*1.1 Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
*/

// ES5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function () {
        this.price = this.price - this.price * 0.25;
};

const product = new Product('calculator', 100);
product.make25PercentDiscount();
console.log(product);


// ES6
class ProductClass {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
    }
}

const product_class = new ProductClass('calculator', 100);
product_class.make25PercentDiscount();
console.log(product_class);