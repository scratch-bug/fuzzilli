function f2() {
    return 54060;
}
const v3 = [40368,5];
function f5(a6) {
    function f7(a8, a9, a10) {
        return f7;
    }
    const v13 = { type: "function", value: 54060, maxByteLength: 2147483648, arguments: v3 };
    const v14 = new Worker(f7, v13);
    return v14.postMessage(v13);
}
WeakMap[Symbol.toPrimitive] = f5;
class C19 {
    [WeakMap] = -1000000000000.0;
}
WebAssembly.instantiateStreaming().catch(f2);
