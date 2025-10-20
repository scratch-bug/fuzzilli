function f1(a2, a3, a4) {
    function f5() {
        return f1;
    }
    WebAssembly.compileStreaming(WebAssembly, a4).catch(f5);
    class C9 {
    }
    const v21 = {
        toString(a15, a16, a17, a18) {
            a16(C9, Symbol, 2.2250738585072014e-308);
            a17.toString(7);
            return 7;
        },
    };
    const v22 = v21.toString;
    return v22(BigInt64Array, v22);
}
const v26 = { type: "function" };
Object.defineProperty(v26, "flushDenormals", { writable: true, value: WeakSet });
const v27 = new Worker(f1, v26);
v27.getMessage(Worker);
