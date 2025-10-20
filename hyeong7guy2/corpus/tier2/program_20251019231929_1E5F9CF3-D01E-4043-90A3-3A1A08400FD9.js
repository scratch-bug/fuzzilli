function f2() {
    return 2147483649;
}
Object.toString = f2;
Object.defineProperty(Object, Object, { enumerable: true, set: Object });
function F3() {
    if (!new.target) { throw 'must be called with new'; }
}
function f5(a6, a7) {
    const v10 = new Proxy(Object, {});
    return v10;
}
F3.constructor = f5;
class C11 extends F3 {
    static {
        class C14 extends this.constructor {
        }
        const v15 = new C14();
        v15.freeze(v15);
    }
}
