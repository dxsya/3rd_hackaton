export function getProductCountInCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart ? cart.products.length : 0;
}

export const calcSubPrice = (product) => +product.count * product.item.price;

export const calcTotalPrice = (products) => {
    return products.reduce((acc, curr) => {
        return acc + curr.subPrice;
    }, 0);
};

export function getRandomProducts(length) {
    let a = Math.floor(Math.random() * length);
    if (a <= 4) {
        return [a, a + 4];
    } else {
        return [a - 4, a];
    }
}
