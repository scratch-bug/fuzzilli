function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    Object[129] = Object;
}
new F1();
function F7() {
    if (!new.target) { throw 'must be called with new'; }
}
function f9(a10, a11) {
    function F13() {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f15(a16, a17) {
        const v20 = new Proxy(Object, {});
        return v20;
    }
    F13.constructor = f15;
    class C21 extends F13 {
        static {
            class C24 extends this.constructor {
            }
            const v25 = new C24();
            v25.freeze(v25);
        }
    }
}
F7.toString = f9;
for (let i28 = 10, i29 = 10; i29; i29--) {
}
const v35 = class extends F7 {
    [F7] = F7;
}
