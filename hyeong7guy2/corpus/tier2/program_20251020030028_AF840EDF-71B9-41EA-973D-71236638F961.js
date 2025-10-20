function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
        }
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            const v13 = globalThis.performance.measureMemory;
            v13.e = v13;
            v13();
        }
        new F7(F7, F0);
        function f17() {
            return WebAssembly;
        }
        WebAssembly.instantiateStreaming().catch(f17);
        return f5;
    }
    f4.e = f4;
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
for (let i28 = 0;
    (() => {
        Uint8ClampedArray[4] = i28;
        return i28 < 20000;
    })();
    i28++) {
}
