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
                            return F9;
                        }
                        function f25() {
                            return a5;
                        }
                        WebAssembly.instantiateStreaming(a14, WebAssembly, v3).catch(f25);
                        function f28(a29) {
                            function f32(a33) {
                                function F34(a36) {
                                    if (!new.target) { throw 'must be called with new'; }
                                    const v38 = ("object").constructor.fromCharCode(14);
                                    this.trimEnd();
                                    Uint8ClampedArray();
                                    v38[0] = v38;
                                }
                                new F34();
                                return a6;
                            }
                            try { f32(); } catch (e) {}
                            return f32;
                        }
                        Object.defineProperty(this, "e", { get: f24, set: f28 });
                        this.e = -1;
                    }
                    new F18(this, a5, a11, a16);
                    return a5;
                }
                f13();
                %OptimizeFunctionOnNextCall(f13);
            }
            new F9(WebAssembly, WebAssembly);
            new F9(F9, F9);
            new F9();
            return F9;
        }
        WebAssembly.compileStreaming(WebAssembly, a6).catch(f8);
    }
}
new v3();
