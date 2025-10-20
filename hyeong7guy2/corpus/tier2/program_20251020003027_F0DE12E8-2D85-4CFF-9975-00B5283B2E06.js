function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    class C4 {
    }
    function f6() {
    }
    function f7() {
        function f8(a9) {
            const v10 = async () => {
                try {
                    await WebAssembly.instantiate();
                } catch(e14) {
                }
                return a9;
            };
            v10();
            Object.defineProperty(C4, f8, { writable: true, configurable: true, enumerable: true, set: f7 });
        }
        f8.toString = f8;
        return f8;
    }
    function f16(a17) {
        return a17;
    }
    Object.defineProperty(f6, Symbol.iterator, { configurable: true, enumerable: true, get: f7, set: f16 });
    try { new Uint16Array(f6); } catch (e) {}
    gc();
    const v23 = {};
}
new F0();
