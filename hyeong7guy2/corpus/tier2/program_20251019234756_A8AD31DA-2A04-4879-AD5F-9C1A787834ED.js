function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
function f4() {
    function f5(a6, a7, a8) {
        return f5;
    }
    return f5;
}
F0[Symbol.toPrimitive] = f4;
const v16 = {
    construct(a12, a13) {
        try { a13.fill(this, F0); } catch (e) {}
        return Reflect;
    },
};
function f18() {
    return v16;
}
const v19 = new Proxy(f18, v16);
Reflect.construct(v19, v16);
