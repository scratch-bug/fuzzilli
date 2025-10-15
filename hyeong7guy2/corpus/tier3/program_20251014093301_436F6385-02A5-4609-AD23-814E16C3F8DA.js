function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0;
        i6 < 20000;
        (() => {
            const v11 = i6++ - -2147483648;
            v11 | v11;
        })()) {
    }
}
new F1();
