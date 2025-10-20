function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    const v8 = new Proxy(Object, {});
    v8[0] = v8;
    return v8;
}
F1.constructor = f3;
class C9 extends F1 {
    static {
        class C12 extends this.constructor {
        }
        const v13 = new C12();
        v13.freeze(v13);
    }
}
