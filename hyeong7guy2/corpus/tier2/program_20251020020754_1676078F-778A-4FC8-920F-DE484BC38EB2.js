function f0() {
}
function F1() {
    if (!new.target) { throw 'must be called with new'; }
    this.h = f0;
    this.d = f0;
}
new F1();
new F1();
class C6 extends F1 {
    set g(a8) {
        const v9 = `
        `;
        eval(v9);
    }
}
new C6();
new C6();
new C6();
new C6();
new Uint32Array(0);
const v23 = Symbol.iterator;
const v31 = {
    [v23]() {
        const v26 = %WasmStruct();
        const v29 = {
            next() {
                return { __proto__: v26, done: 10 };
            },
        };
        const v30 = v29.next();
        v30.a = v30;
        return v29;
    },
};
function f33() {
    const v34 = new Date(WeakSet, Date, 882, ...v31, ...v31);
    return v34;
}
f33();
function F36(a38, a39) {
    if (!new.target) { throw 'must be called with new'; }
    gc();
}
const v43 = new F36(F36, F36);
new F36(F36, v43);
f33();
