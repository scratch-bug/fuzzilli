for (let i2 = 0;
    i2 < 25000;
    (() => {
        ++i2;
        Symbol[Symbol.matchAll] = i2;
    })()) {
}
