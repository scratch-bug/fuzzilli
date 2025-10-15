function f0() {
}
for (let i2 = 0;
    i2 < 20000;
    (() => {
        const v6 = ++i2;
        v6 >>> v6;
        f0--;
    })()) {
}
