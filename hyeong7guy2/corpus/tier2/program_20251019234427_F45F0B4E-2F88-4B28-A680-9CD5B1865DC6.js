let v0 = 536870912;
for (let i2 = 0;
    (() => {
        for (let v3 = 0; v3 < 5; v3++) {
            v0 << v3;
        }
        return i2 < 100000;
    })();
    ++i2) {
}
const v12 = {
    o() {
        v0--;
        return this;
    },
};
