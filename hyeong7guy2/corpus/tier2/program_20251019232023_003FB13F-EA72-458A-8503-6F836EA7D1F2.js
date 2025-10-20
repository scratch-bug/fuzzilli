function f1() {
    return f1;
}
const v2 = [40368,5];
function f4(a5) {
    function f6(a7, a8, a9) {
        return a5;
    }
    const v12 = { type: "function", value: 54060, maxByteLength: 54060, arguments: v2 };
    const v13 = new Worker(f6, v12);
    v13.postMessage(v12);
}
WeakMap[Symbol.toPrimitive] = f4;
class C18 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming().catch(f1);
