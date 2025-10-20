function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v20 = {
        construct(a5, a6) {
            const v8 = class extends Int8Array {
            }
            function f9() {
                function f10(a11, a12) {
                    f10 = a11;
                    const v13 = %WasmStruct();
                    return f10;
                }
                new Worker(f10, { type: "function" });
                return a6;
            }
            v8.constructor = f9;
            v8.constructor();
            return Reflect;
        },
    };
    function f23() {
        return F0;
    }
    WebAssembly.instantiateStreaming().catch(f23);
    function f26() {
        return Proxy;
    }
    const v27 = new Proxy(f26, v20);
    Reflect.construct(v27, Proxy);
}
new F0();
