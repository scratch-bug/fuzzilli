const v1 = new WeakMap();
function f2() {
    return v1;
}
new Uint32Array(v1, v1, WeakMap);
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
}
new F5(Uint32Array, F5, Uint32Array, WeakMap);
const v12 = [];
function f13() {
    const v16 = class extends BigInt64Array {
    }
    for (let i17 = 1000;
        (() => {
            const v18 = { g: v16 };
            const v20 = [];
            const v21 = v12.values;
            if (Reflect.apply(v21, v18, v20) !== v21) {
            } else {
            }
            for (const v24 of v20) {
            }
            return i17 < 20000;
        })();
        ++i17) {
    }
}
f13();
