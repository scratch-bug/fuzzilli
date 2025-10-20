function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f8() {
            function F9(a11, a12) {
                if (!new.target) { throw 'must be called with new'; }
                function f13(a14, a15, a16) {
                    function F18(a20, a21, a22, a23) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f24() {
                            return this;
                        }
                        function f25() {
                            return a5;
                        }
                        WebAssembly.instantiateStreaming().catch(f25);
                        function f28(a29) {
                            function f30(a31) {
                                class C32 {
                                }
                                const v33 = {};
                                const v34 = {};
                                v33.toISOString = v34;
                                for (const v35 in v33) {
                                    v34.a = C32;
                                }
                                return a31;
                            }
                            try { f30(); } catch (e) {}
                            return F9;
                        }
                        Object.defineProperty(this, "e", { get: f24, set: f28 });
                        this.e = -1;
                    }
                    new F18(a14, a5, a6, F0);
                    return f13;
                }
                f13();
                %OptimizeFunctionOnNextCall(f13);
            }
            new F9();
            new F9();
            new F9();
            return a5;
        }
        WebAssembly.compileStreaming(WebAssembly).catch(f8);
    }
}
new v3();
