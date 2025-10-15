const v0 = [-2147483648];
for (let i2 = 0;
    i2 < 10000;
    (() => {
        const v6 = i2++;
        v6 * v6;
        v0.valueOf = v6;
    })()) {
}
