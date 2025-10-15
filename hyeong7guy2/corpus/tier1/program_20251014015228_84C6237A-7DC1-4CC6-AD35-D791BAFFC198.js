class C0 {
}
for (let i2 = 0;
    i2 < 20000;
    (() => {
        i2++;
        C0.e |= i2;
    })()) {
}
