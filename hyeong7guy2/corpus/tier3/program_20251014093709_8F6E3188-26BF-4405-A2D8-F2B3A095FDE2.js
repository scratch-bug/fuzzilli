for (let i2 = 0;
    i2 < 1000;
    (() => {
        const v7 = new BigInt64Array(1);
        v7[0] = v7;
        i2++;
    })()) {
}
