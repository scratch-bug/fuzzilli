const v3 = new Date();
for (let i5 = 0;
    i5 < 10000;
    (() => {
        const v9 = ++i5;
        const v11 = {
            valueOf() {
                return v9;
            },
        };
        v3.b ^= 1073741824;
        const v12 = {};
        let v13 = Symbol.bind();
    })()) {
}
