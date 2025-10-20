const v2 = new Float32Array(207);
function f4(a5) {
    function f6(a7, a8, a9) {
        return a8;
    }
    const v12 = { type: "function" };
    v12.flushDenormals = v2;
    const v13 = new Worker(f6, v12);
    v13.postMessage(v12);
}
WeakMap[Symbol.toPrimitive] = f4;
class C18 {
    [WeakMap] = -1000000000000.0;
}
