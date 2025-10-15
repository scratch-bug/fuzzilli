function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
for (let i5 = 0;
    i5 < 20000;
    (() => {
        const v9 = ++i5;
        const v13 = {
            valueOf() {
                eval();
                return v9;
            },
        };
        const v19 = {
            n(a15, a16, a17) {
                super[F0];
                return a17;
            },
        };
    })()) {
}
