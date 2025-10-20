function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function f7(a8, a9) {
            const v10 = a9 | a9;
            function F12(a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
                function F17(a19, a20) {
                    if (!new.target) { throw 'must be called with new'; }
                    new a19(Uint8ClampedArray);
                    function f22() {
                        function f23(a24) {
                            function F27(a29, a30) {
                                if (!new.target) { throw 'must be called with new'; }
                                this.e = a15;
                                a30++;
                                this.e = a30;
                            }
                            const v32 = new F27("2147483647", -3612);
                            v32.b = f23;
                            const v33 = new F27();
                            v33.b = this;
                            return v33;
                        }
                        return f23;
                    }
                    Object.defineProperty(this, "toString", { get: f22 });
                }
                const v34 = new F17(F17);
                v34.toString();
                function f36(a37, a38, a39) {
                    return a37;
                }
                f36(a9, arguments);
            }
            new F12(F12, v10);
            return f7;
        }
        const v42 = f7();
        %PrepareFunctionForOptimization(f7);
        %OptimizeMaglevOnNextCall(f7);
        f7(f7, v42);
        function f45() {
            return a6;
        }
        WebAssembly.compileStreaming().catch(f45);
    }
}
new v3(F0, v3);
