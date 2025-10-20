function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v20 = {
        construct(a5, a6) {
            const v8 = class extends Int8Array {
            }
            function f9() {
                function f10(a11, a12) {
                    f10 = a11;
                    const v13 = {};
                    return this;
                }
                new Worker(f10, { type: "function" });
                return f10;
            }
            v8.constructor = f9;
            v8.constructor(a3, v8, a3, a6);
            return Reflect;
        },
    };
    function f23() {
        return a3;
    }
    WebAssembly.instantiateStreaming(a2).catch(f23);
    function f26() {
        return this;
    }
    const v27 = new Proxy(f26, v20);
    Reflect.construct(v27, Proxy);
}
new F0(F0, F0);
