function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    const v5 = {};
    function f6() {
        return f6;
    }
    function f7(a8) {
        return a8;
    }
    Object.defineProperty(v5, "get", { configurable: true, get: f6, set: f7 });
    return f7;
}
F0.constructor = f2;
class C9 extends F0 {
    static {
        const v11 = this.constructor;
        v11();
        class C13 extends v11 {
        }
        new C13();
    }
}
