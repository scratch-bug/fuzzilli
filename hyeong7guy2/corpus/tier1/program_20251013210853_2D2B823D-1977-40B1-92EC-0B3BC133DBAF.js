const v1 = Symbol.iterator;
new Proxy(Symbol, { getPrototypeOf: Symbol, ownKeys: Symbol, set: Symbol });
const v7 = {
    [v1]() {
        const v6 = {};
    },
};
const v9 = {
    [Symbol]() {
    },
};
function f10(a11) {
    if (a11) {
        const v13 = { p1: 1.1 };
    }
    const v14 = {};
    return { q1: v14 };
}
for (let i17 = 0; i17 < 20000; i17++) {
    f10();
}
f10();
