function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new BigInt64Array();
function F7(a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a10;
}
const v11 = new F7(F1, v6);
function f12() {
    return F1;
}
const v13 = [40368,5];
function f15(a16) {
    function f17(a18, a19, a20) {
        return a20;
    }
    const v23 = { type: "function", transfer: v13 };
    v23.b = v23;
    v23.flushDenormals = v11;
    const v24 = new Worker(f17, v23);
    v24.postMessage(v23);
}
WeakMap[Symbol.toPrimitive] = f15;
class C29 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming().catch(f12);
