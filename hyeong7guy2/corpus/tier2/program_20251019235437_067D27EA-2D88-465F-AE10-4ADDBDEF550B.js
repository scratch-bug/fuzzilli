function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            class C17 extends Uint16Array {
            }
            class C18 extends C17 {
            }
            function f19() {
                return this;
            }
            function f20(a21) {
                const v23 = class extends Uint16Array {
                    constructor(a25, a26) {
                        super();
                        function f27(a28, a29) {
                            const v30 = a29 | a29;
                            function F32(a34, a35) {
                                if (!new.target) { throw 'must be called with new'; }
                                function f36(a37, a38, a39) {
                                    a35--;
                                }
                                f36(a29, arguments);
                            }
                            const v42 = new F32(F32, v30);
                            return v42;
                        }
                        f27(f27, 2147483649);
                        f27(2147483649);
                        function f46() {
                        }
                        WebAssembly.compile().catch(f46);
                    }
                }
                new v23(a4, a7);
                return this ^ Math.atanh(92);
            }
            Object.defineProperty(C18, "constructor", { configurable: true, get: f19, set: f20 });
            const v53 = class {
            }
            function F54(a56, a57) {
                if (!new.target) { throw 'must be called with new'; }
                a57.constructor = 42212;
            }
            new F54(v53, C18);
        }
        const v59 = new F10();
        return v59;
    }
    f6(a5, a4, F2);
    %OptimizeFunctionOnNextCall(f6);
}
const v61 = new F2(92, F2);
new F2(42212, 92);
new F2(v61, 42212);
