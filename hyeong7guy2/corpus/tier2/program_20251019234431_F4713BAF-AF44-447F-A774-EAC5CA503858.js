const v0 = class {
}
const v1 = new v0();
function F5(a7, a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
}
const v10 = new BigInt64Array(v1, BigInt64Array, F5);
function F11(a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a14;
}
const v15 = new F11(F5, v10);
function f16() {
    return v10;
}
const v17 = [40368,5];
v17.fill(v1);
function f19(a20) {
    function f21(a22, a23, a24) {
        return a23;
    }
    const v29 = {
        type: "function",
        transfer: v17,
        set g(a28) {
        },
    };
    v29.flushDenormals = v15;
    const v30 = new Worker(f21, v29);
    v30.postMessage(v29);
}
const v32 = Symbol.toPrimitive;
WeakMap[v32] = f19;
class C34 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming(v10, v10, v32).catch(f16);
