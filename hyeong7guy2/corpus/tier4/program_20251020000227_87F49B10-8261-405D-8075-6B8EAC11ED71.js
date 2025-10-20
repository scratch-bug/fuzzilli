function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
}
const v5 = new F1(Symbol, Symbol);
function f6() {
    return F1;
}
function f8(a9) {
    v5.length = a9.substring(a9, Symbol);
    function f11(a12, a13, a14) {
        return a14;
    }
    const v17 = { type: "function" };
    v17.flushDenormals = v5;
    const v18 = new Worker(f11, v17);
    v18.postMessage(v17);
}
const v20 = Symbol.toPrimitive;
WeakMap[v20] = f8;
class C22 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming(WebAssembly, v20, v5).catch(f6);
