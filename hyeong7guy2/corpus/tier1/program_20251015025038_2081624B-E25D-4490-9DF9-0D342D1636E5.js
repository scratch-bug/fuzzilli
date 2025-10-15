function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    const v8 = new Proxy(Object, {});
    return v8;
}
F0.constructor = f2;
class C9 extends F0 {
    static {
        class C12 extends this.constructor {
        }
        const v13 = new C12();
        v13.freeze(v13);
    }
}
