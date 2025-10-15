function f0() {
    return f0;
}
for (let i2 = 0;
    (() => {
        const v4 = i2 < 25000;
        f0();
        return v4;
    })();
    i2++) {
}
