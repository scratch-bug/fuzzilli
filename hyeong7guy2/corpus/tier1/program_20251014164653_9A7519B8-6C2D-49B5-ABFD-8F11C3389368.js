function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 5; v2++) {
        const v4 = { a: 1 };
    }
    const v6 = { a: 1.1 };
}
const v7 = new F0();
const v8 = v7.constructor;
new v8(v8, v8, v7, v8);
for (let i12 = 0;
    (() => {
        const v17 = {
            o(a15, a16) {
                return this;
            },
        };
        return i12 < 20000;
    })();
    i12++) {
    const v24 = i12 ? { a: 1 } : Object;
    v24.toISOString = v24;
}
