const v3 = new Date(1073741824);
for (let i5 = 0;
    i5 < 10000;
    (() => {
        ++i5;
        v3.b ^= 1073741824;
        const v11 = {
            valueOf() {
                return i5;
            },
        };
        let v12 = Symbol.bind();
    })()) {
}
