const v5 = new ArrayBuffer(3725, { maxByteLength: 3725 });
function F6(a8, a9) {
    if (!new.target) { throw 'must be called with new'; }
    this.f = v5;
}
const v10 = new F6();
function f11() {
    return v10;
}
function f13(a14) {
    function f15(a16, a17, a18) {
        return a17;
    }
    const v21 = { type: "function" };
    v21.flushDenormals = v10;
    const v22 = new Worker(f15, v21);
    return v22.postMessage(v21);
}
WeakMap[Symbol.toPrimitive] = f13;
class C26 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming(WebAssembly).catch(f11);
