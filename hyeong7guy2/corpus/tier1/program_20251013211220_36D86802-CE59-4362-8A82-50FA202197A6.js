const v7 = {
    get a() {
        return this;
    },
    [BigInt64Array](a3, a4, a5, a6) {
    },
};
const v9 = Object.create(v7);
for (let i11 = 0; i11 < 20000; i11++) {
    v9.a = {};
}
const v20 = { a: 1.1, b: 2.2 };
