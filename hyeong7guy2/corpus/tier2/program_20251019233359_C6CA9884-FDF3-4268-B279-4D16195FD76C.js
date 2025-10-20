const v2 = new BigUint64Array(7);
for (const v3 in v2) {
    for (let i5 = 0; i5 < 20000;) {
        const v11 = {
            valueOf() {
                return i5;
            },
        };
        ++i5;
    }
}
