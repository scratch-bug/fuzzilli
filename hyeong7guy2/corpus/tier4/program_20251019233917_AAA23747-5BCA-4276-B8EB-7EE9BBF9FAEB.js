function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = new BigInt64Array();
function F8(a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a11;
}
const v12 = new F8(F2, v7);
function f13() {
    return f13;
}
function f15(a16) {
    function f17(a18, a19, a20) {
        return a18;
    }
    const v23 = { type: "function", transfer: 268435439n };
    v23.flushDenormals = v12;
    const v24 = new Worker(f17, v23);
    v24.postMessage(v23);
}
WeakMap[Symbol.toPrimitive] = f15;
class C29 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming().catch(f13);
