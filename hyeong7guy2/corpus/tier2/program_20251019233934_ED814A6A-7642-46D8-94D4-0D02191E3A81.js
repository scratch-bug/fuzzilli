const v3 = new Date();
for (let i5 = 0;
    i5 < 10000;
    (() => {
        const v9 = ++i5;
        v3.b ^= 1073741824;
        const v12 = {
            valueOf() {
                Symbol(v9);
                return 1073741824;
            },
        };
        let v13 = Symbol.bind();
    })()) {
}
