function F0() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v2 = 0; v2 < 5; v2++) {
        const v4 = { a: 1 };
    }
    const v6 = { a: 1.1 };
}
const v7 = new F0();
const v8 = v7.constructor;
new v8(F0, v8, v7);
for (let i13 = (() => {
        0 & 0;
        return 0;
    })();
    i13 < 20000;
    i13++) {
    const v21 = i13 ? { a: 1 } : Object;
    v21.toISOString = v21;
}
function f22(a23) {
    return F0;
}
f22.g = f22;
