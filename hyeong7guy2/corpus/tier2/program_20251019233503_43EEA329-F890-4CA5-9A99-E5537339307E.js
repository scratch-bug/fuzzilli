class C1 extends Uint32Array {
}
function F3(a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    function f7(a8) {
        return a8;
    }
    function F9(a11) {
        if (!new.target) { throw 'must be called with new'; }
    }
    function f12() {
        return a5;
    }
    function f13(a14) {
        const v16 = d8.profiler;
        try { v16.setOnProfileEndListener(a6); } catch (e) {}
        return this;
    }
    Object.defineProperty(F9, Symbol.toPrimitive, { enumerable: true, get: f12, set: f13 });
    F9[Symbol.toPrimitive] = f7;
}
const v20 = new F3(Uint32Array, F3);
const t22 = v20.constructor;
new t22(C1, F3);
