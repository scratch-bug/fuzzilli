function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    function f6(a7) {
        return Object;
    }
    Object.defineProperty(Object, Symbol, { configurable: true, enumerable: true, set: f6 });
    function F9() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f11(a12, a13) {
        const v16 = new Proxy(Object, {});
        return v16;
    }
    F9.constructor = f11;
    class C17 extends F9 {
        static {
            class C20 extends this.constructor {
            }
            const v21 = new C20();
            v21.freeze(v21);
        }
    }
}
F0.toString = f2;
for (let i24 = 10, i25 = 10; i25; i25--) {
}
const v31 = class extends F0 {
    [F0] = F0;
}
