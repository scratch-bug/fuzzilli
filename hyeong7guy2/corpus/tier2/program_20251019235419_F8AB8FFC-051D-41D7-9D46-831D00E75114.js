class C1 extends Uint16Array {
    constructor(a3, a4, a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function f11() {
                function f12(a13) {
                    function F14(a16, a17) {
                        if (!new.target) { throw 'must be called with new'; }
                        function f18() {
                            function f19(a20) {
                                d8.getExtrasBindingObject(a10, f18, F14).setContinuationPreservedEmbedderData(a20);
                                return a20;
                            }
                            return f19;
                        }
                        Object.defineProperty(this, "toString", { get: f18 });
                    }
                    const v24 = new F14();
                    const v25 = v24.toString;
                    v25(v25);
                }
                f12(this);
                f12();
                %OptimizeMaglevOnNextCall(f12);
                return f12;
            }
            Object.defineProperty(this, "toString", { get: f11 });
        }
        const v29 = new F7();
        class C30 {
            static [v29](a32, a33, a34) {
            }
        }
    }
}
new C1();
