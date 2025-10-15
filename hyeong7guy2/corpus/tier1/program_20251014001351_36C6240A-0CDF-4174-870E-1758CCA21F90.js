for (let i2 = 0;
    i2 < 20000;
    (() => {
        ++i2;
        for (let v7 = 0; v7 < 5; v7++) {
            new Proxy(Array, {});
        }
    })()) {
}
