class C1 {
}
const v2 = new C1();
class C3 {
}
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = a7;
}
const v8 = new F4(C3, v2);
function f9() {
    return C3;
}
const v10 = [40368,5];
function f12(a13) {
    function f14(a15, a16, a17) {
        return a16;
    }
    const v22 = {
        set d(a21) {
        },
        type: "function",
        arguments: v10,
    };
    v22.flushDenormals = v8;
    const v23 = new Worker(f14, v22);
    v23.postMessage(v22);
}
WeakMap[Symbol.toPrimitive] = f12;
class C27 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming(WebAssembly, C1, C27).catch(f9);
