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
                            return f24;
                        }
                        function f25() {
                            return WebAssembly;
                        }
                        WebAssembly.instantiateStreaming().catch(f25);
                        function f28(a29) {
                            function f32(a33) {
                                function F34(a36) {
                                    if (!new.target) { throw 'must be called with new'; }
                                    const v38 = ("object").constructor.fromCharCode(14);
                                    v38[0] = v38;
                                }
                                new F34(a29);
                                return a14;
                            }
                            try { f32(F9); } catch (e) {}
                            return F9;
                        }
                        Object.defineProperty(this, "e", { get: f24, set: f28 });
                        f28(a6);
                        this.e = -1;
                    }
                    const v42 = new F18();
                    return v42;
                }
                f13();
                %OptimizeFunctionOnNextCall(f13);
            }
            new F9(a6, a6);
            new F9();
            const v46 = new F9();
            return v46;
        }
        WebAssembly.compileStreaming(this).catch(f8);
    }
}
new v3(v3, F0);
