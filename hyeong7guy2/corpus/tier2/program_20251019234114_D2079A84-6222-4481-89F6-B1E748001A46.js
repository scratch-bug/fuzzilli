function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function f6(a7) {
            function F10(a12, a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v15 = new BigInt64Array();
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.d = a19;
            }
            const v20 = new F16(F10, v15);
            function f21() {
            }
            function f22(a23) {
                function f24(a25, a26, a27) {
                }
                const v30 = { type: "function" };
                v30.flushDenormals = v20;
                const v31 = new Worker(f24, v30);
                v31.postMessage(v30);
            }
            WeakMap[Symbol.toPrimitive] = f22;
            class C35 {
                [WeakMap] = -1000000000000.0;
            }
            WebAssembly.instantiateStreaming().catch(f21);
        }
        f6();
        return f6;
    }
    Object.defineProperty(this, "toString", { get: f5 });
}
const v40 = new F1();
v40.toString();
