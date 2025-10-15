const v2 = new Date();
for (let i4 = 0;
    i4 < 10000;
    (() => {
        ++i4;
        v2.b ^= 1073741824;
        const v12 = {
            valueOf() {
            },
        };
    })()) {
}
