const v1 = {};
const v34 = {
    getOwnPropertyDescriptor(a3, a4) {
        function F5(a7, a8, a9) {
            if (!new.target) { throw 'must be called with new'; }
            function F10(a12, a13) {
                if (!new.target) { throw 'must be called with new'; }
                function F15(a17, a18, a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f21() {
                        return this;
                    }
                    function f22(a23) {
                        function f25() {
                            return a13;
                        }
                        WebAssembly.compileStreaming().catch(f25);
                        const v29 = globalThis.console;
                        return v29.trace(a3, v29);
                    }
                    Object.defineProperty(this, "e", { get: f21, set: f22 });
                    this.e = -1;
                }
                new F15(F15, -1, a8, a3);
            }
            new F10();
        }
        new F5();
    },
};
const v35 = new Proxy(v1, v34);
v35.__lookupGetter__(v1, v34);
