function f1() {
    return Uint32Array;
}
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.toString = f1;
}
const v7 = new F2(f1, f1, f1);
try {
    const v9 = new Uint32Array(4);
    Object.defineProperty(v9, "unitDisplay", { writable: true, enumerable: true, value: v7 });
    const v10 = class extends Uint32Array {
        constructor(a12) {
            super(v9);
            const v14 = [a12,v9];
            Reflect.apply(v9.toLocaleString, this, v14);
        }
    }
    new v10();
} catch(e18) {
}
