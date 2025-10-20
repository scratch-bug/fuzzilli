for (let i2 = 0, i3 = 10; i3; i3--) {
}
for (let v10 = 0; v10 < 5; v10++) {
    Object[v10] = v10;
}
function F11() {
    if (!new.target) { throw 'must be called with new'; }
}
function f13(a14, a15) {
    const v18 = new Proxy(Object, {});
    v18.seal(Object);
    return v18;
}
F11.constructor = f13;
class C20 extends F11 {
    static {
        class C23 extends this.constructor {
        }
        const v24 = new C23();
        v24.freeze(v24);
    }
}
