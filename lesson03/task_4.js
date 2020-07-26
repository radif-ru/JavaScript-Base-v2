'use strict';

// 4. Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый товар применить скидку
// 15%, можете использовать метод forEach https://mzl.la/1AOMMWX :
//     const products = [
//         {
//             id: 3,
//             price: 200,
//         },
//         {
//             id: 4,
//             price: 900,
//         },
//         {
//             id: 1,
//             price: 1000,
//         },
//     ];

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// Можно так: с заменой цены на новую со скидкой:
// products.map(function (product) {
//     return product.price = product.price + product.price / 100 * 15
// });

// Или так: с добавлением раздела, где цена со скидкой и выводить её при необходимости:
products.forEach(function (product) {
    product.discount_price = product.price + product.price / 100 * 15;
    console.log(`id: ${product.id}, price: ${product.price}, discount_price: ${product.discount_price}`)
});