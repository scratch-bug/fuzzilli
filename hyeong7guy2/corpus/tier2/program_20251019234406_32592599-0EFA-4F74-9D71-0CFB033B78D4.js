function f0() {
    return f0;
}
for (let i2 = 0;
    (() => {
        const v4 = i2 < 20000;
        for (let v5 = 0; v5 < 5; v5++) {
            f0.e <<= 4;
        }
        return v4;
    })();
    i2++) {
}
