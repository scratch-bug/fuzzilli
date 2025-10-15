const v3 = new Date(1073741824);
for (let i5 = 0;
    i5 < 10000;
    (() => {
        const v9 = ++i5;
        v3.b ^= 1073741824;
        const v13 = {
            valueOf() {
                eval(v9);
                return v3;
            },
        };
        let v14 = Symbol.bind();
    })()) {
}
