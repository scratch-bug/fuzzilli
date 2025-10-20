function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = class extends F0 {
    constructor(a5, a6) {
        super();
        function F7(a9, a10) {
            if (!new.target) { throw 'must be called with new'; }
            function F11(a13, a14) {
                if (!new.target) { throw 'must be called with new'; }
                function f15() {
                    function f16(a17) {
                        function f20() {
                            return f20;
                        }
                        const v21 = f20.apply(4, arguments);
                        v21();
                        v21(this, a6, this, a14);
                    }
                    %OptimizeMaglevOnNextCall(f16);
                    return f16;
                }
                Object.defineProperty(this, "toString", { get: f15 });
            }
            const v24 = new F11(v3, F11);
            class C25 {
                static [v24](a27, a28, a29) {
                }
                static [v24](a31, a32, a33) {
                }
            }
        }
        new F7(a6, a6);
    }
}
new v3(v3, v3);
