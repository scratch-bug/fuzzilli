function f1() {
    return f1;
}
function f2() {
    function f3() {
        return { done: true };
    }
    const v9 = new Proxy(Object, { getOwnPropertyDescriptor: Object });
    try { v9.isFrozen(v9); } catch (e) {}
    return { next: f3 };
}
const v12 = Symbol.iterator;
const v13 = { [v12]: f2 };
function F14() {
    if (!new.target) { throw 'must be called with new'; }
}
function f16(a17, a18) {
    return Object;
}
F14.constructor = f16;
class C20 extends F14 {
    static {
        class C23 extends this.constructor {
        }
        const v24 = new C23();
        v24.freeze(v24);
    }
}
f1.bind(null, ...v13);
