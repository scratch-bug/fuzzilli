function f0() {
    return f0;
}
for (let i2 = 0;
    i2 < 20000;
    (() => {
        i2++;
        let v7 = 9;
        v7--;
        f0();
        v7++;
    })()) {
}
