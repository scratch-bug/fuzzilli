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
                            return v3;
                        }
                        function f25() {
                            return -1;
                        }
                        const v27 = WebAssembly.instantiateStreaming(a22, this, a5).catch(f25);
                        function f28(a29) {
                            function f32(a33) {
                                function F34(a36) {
                                    if (!new.target) { throw 'must be called with new'; }
                                    const v38 = ("object").constructor.fromCharCode(14);
                                    v38[0] = v38;
                                }
                                const v39 = new F34();
                                return v39;
                            }
                            try { f32(a14); } catch (e) {}
                            return v27;
                        }
                        Object.defineProperty(this, "e", { get: f24, set: f28 });
                        this.e = -1;
                    }
                    new F18();
                    return this;
                }
                f13();
                %OptimizeFunctionOnNextCall(f13);
            }
            new F9();
            const v44 = new F9();
            new F9(v44, a6);
            return v3;
        }
        WebAssembly.compileStreaming().catch(f8);
    }
}
new v3();
