const v0 = /^pcn(?:a*)+/dusy;
function f2(a3) {
    function f4(a5, a6, a7) {
        return v0;
    }
    const v10 = { type: "function" };
    v10.flushDenormals = v0;
    const v11 = new Worker(f4, v10);
    v11.postMessage(v10);
}
WeakMap[Symbol.toPrimitive] = f2;
class C16 {
    [WeakMap] = -1000000000000.0;
}
