function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new BigInt64Array(Symbol, F3, F3);
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
}
const v13 = new F9(F3, v8);
function f14() {
    return f14;
}
const v15 = [40368,5];
v15.pop();
function f17(a18) {
    function f19(a20, a21, a22) {
        return f19;
    }
    const v27 = {
        type: "function",
        transfer: v15,
        set g(a26) {
        },
    };
    v27.flushDenormals = v13;
    const v28 = new Worker(f19, v27);
    return v28.postMessage(v27);
}
WeakMap[Symbol.toPrimitive] = f17;
class C32 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming().catch(f14);
