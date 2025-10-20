function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function f2(a3, a4) {
    const v8 = new Proxy(Object, {});
    v8.seal(Object);
    return v8;
}
F0.constructor = f2;
class C10 extends F0 {
    static {
        class C13 extends this.constructor {
        }
        const v14 = new C13();
        v14.freeze(v14);
    }
}
