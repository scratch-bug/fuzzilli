function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new Date();
function f7() {
    return Date;
}
const v8 = [40368,5];
function f10(a11) {
    function f12(a13, a14, a15) {
        return Date;
    }
    const v18 = { type: "function", arguments: v8 };
    v18.flushDenormals = v6;
    const v19 = new Worker(f12, v18);
    v19.postMessage(v18);
}
const v21 = Symbol.toPrimitive;
v8[15] |= F0;
WeakMap[v21] = f10;
class C23 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming(v21, v8, -1000000000000.0).catch(f7);
