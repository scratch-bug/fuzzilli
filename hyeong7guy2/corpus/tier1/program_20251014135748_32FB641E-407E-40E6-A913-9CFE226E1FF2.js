const v0 = [];
function F2() {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 5; v4++) {
        const v6 = { a: 1 };
    }
    const v8 = { a: 1.1 };
}
const v9 = new F2();
v0[v0] = Object;
const t10 = v9.constructor;
new t10();
for (let i13 = 8; i13 < 20000; i13++) {
    const v21 = i13 ? { a: 1 } : Object;
    v21.toISOString = v21;
}
