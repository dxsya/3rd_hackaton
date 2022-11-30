function getRandomProducts(length) {
    let a = Math.floor(Math.random() * length);
    if (a - 4 >= 0) {
        return [a - 4, a];
    } else return getRandomProducts(length);
}
console.log(getRandomProducts(20));
