function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 5; v2++) {
        const v4 = { a: 1 };
    }
    const v6 = { a: 1.1 };
}
const v7 = new F0();
const t8 = v7.constructor;
new t8();
for (let i12 = 0; i12 < 20000; i12++) {
    const v20 = i12 ? { a: 1 } : Object;
    v20.toISOString = v20;
}
function f21(a22) {
    return a22;
}
f21(f21);
