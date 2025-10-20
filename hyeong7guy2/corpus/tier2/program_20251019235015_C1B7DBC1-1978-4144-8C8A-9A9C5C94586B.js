for (let i2 = 0;
    i2++, i2 < 10000;
    (() => {
        let v7 = i2 + i2;
        const v8 = ++v7;
        const v11 = {
            valueOf() {
                Symbol(v8);
                return v7;
            },
        };
    })()) {
}
