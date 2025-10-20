function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = a2;
}
const v4 = new F0();
function f5() {
    return f5;
}
const v6 = [40368,5];
function f8(a9) {
    function f10(a11, a12, a13) {
        return a9;
    }
    const v16 = { type: "function", arguments: v6 };
    v16.flushDenormals = v4;
    const v17 = new Worker(f10, v16);
    v17.postMessage(v16);
}
WeakMap[Symbol.toPrimitive] = f8;
class C22 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming().catch(f5);
