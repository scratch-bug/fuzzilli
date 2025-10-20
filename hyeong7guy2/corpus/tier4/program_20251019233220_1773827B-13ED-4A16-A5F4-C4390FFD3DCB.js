for (let i2 = 255;
    (() => {
        i2 << i2;
        const v4 = i2 >>> i2;
        v4 && v4;
        return i2 < 10000;
    })();
    i2++) {
    !(+i2);
}
