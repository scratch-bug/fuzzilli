function f0() {
}
const v5 = {
    construct(a2, a3) {
        return a2;
    },
};
const v7 = new Proxy(f0, v5);
for (let i9 = 0; i9 < 100000; i9++) {
    Reflect.construct(v7, []);
}
