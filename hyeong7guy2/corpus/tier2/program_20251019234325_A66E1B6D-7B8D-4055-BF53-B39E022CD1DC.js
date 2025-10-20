function F3(a5, a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
}
const v8 = new BigInt64Array();
function F9(a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a12;
}
const v13 = new F9(F3, v8);
function f14() {
    return f14;
}
const v15 = [40368,5];
function f16(a17) {
    function f18(a19, a20, a21) {
        return a20;
    }
    const v26 = {
        type: "function",
        transfer: v15,
        set g(a25) {
        },
    };
    v26.flushDenormals = v13;
    const v27 = new Worker(f18, v26);
    v27.postMessage(v26);
    return "function";
}
WeakMap[Symbol.toPrimitive] = f16;
class C31 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming().catch(f14);
