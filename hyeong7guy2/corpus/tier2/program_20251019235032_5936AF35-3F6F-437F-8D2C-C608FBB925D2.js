function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new F0();
v3.h = v3;
function F4(a6, a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a6;
    this.g = a6;
}
const v9 = new F4(v3);
function f11(a12) {
    function f13(a14, a15, a16) {
        return a14;
    }
    const v19 = { type: "function" };
    v19.flushDenormals = v9;
    function f20(a21) {
        return "function";
    }
    Object.defineProperty(v19, "arguments", { enumerable: true, set: f20 });
    const v22 = new Worker(f13, v19);
    v22.postMessage(v19);
    return "function";
}
WeakMap[Symbol.toPrimitive] = f11;
class C27 {
    [WeakMap] = -1000000000000.0;
}
