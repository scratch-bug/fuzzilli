const v0 = /[\cz]9?/usygm;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v0;
}
const v5 = new F1(F1, F1);
function f6() {
    return v0;
}
const v7 = [40368,5];
function f9(a10) {
    function f11(a12, a13, a14) {
        return a13;
    }
    const v17 = { type: "function", transfer: v7 };
    v17.b = v17;
    v17.flushDenormals = v5;
    const v18 = new Worker(f11, v17);
    v18.postMessage(v17);
}
WeakMap[Symbol.toPrimitive] = f9;
class C23 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming().catch(f6);
