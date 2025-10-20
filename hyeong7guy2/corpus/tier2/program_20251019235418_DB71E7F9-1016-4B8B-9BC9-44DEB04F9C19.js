function F1() {
    if (!new.target) { throw 'must be called with new'; }
}
function f3(a4, a5) {
    const v8 = new Proxy(Object, {});
    v8.freeze(v8);
    v8[0] = v8;
    return F1;
}
F1.constructor = f3;
class C10 extends F1 {
    static {
        class C13 extends this.constructor {
        }
        new C13();
    }
}
