function f1() {
    return Date;
}
function f3() {
    return f3;
}
function f4() {
    function f5() {
        return { done: true };
    }
    const v9 = {};
    v9.isExtensible = f1;
    const v11 = new Proxy(Object, v9);
    try { v11.isFrozen(v11); } catch (e) {}
    return { next: f5 };
}
const v14 = Symbol.iterator;
const v15 = { [v14]: f4 };
function F16() {
    if (!new.target) { throw 'must be called with new'; }
}
function f18(a19, a20) {
    return Object;
}
F16.constructor = f18;
class C22 extends F16 {
    static {
        class C25 extends this.constructor {
        }
        const v26 = new C25();
        v26.freeze(v26);
    }
}
f3.bind(null, ...v15);
