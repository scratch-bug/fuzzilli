for (let i2 = 0;
    i2 < 20000;
    (() => {
        const v6 = {};
        const v7 = {};
        i2++;
    })()) {
    const v12 = [Symbol];
    Reflect.apply(Object.is, Object, v12);
}
