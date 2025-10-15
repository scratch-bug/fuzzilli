function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i5 = 0;
        i5 < 20000;
        (() => {
            const v9 = i5++;
            const v10 = v9 - v9;
            v10 | v10;
        })()) {
    }
    this.c = a3;
}
new F0(F0, F0);
