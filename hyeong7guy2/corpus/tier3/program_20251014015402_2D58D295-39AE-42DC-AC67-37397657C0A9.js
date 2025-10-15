for (let i2 = 0;
    i2 < 20000;
    (() => {
        ++i2;
        new Proxy(Array, {});
    })()) {
}
const t7 = "🙌🏿";
t7[2] = "🙌🏿";
