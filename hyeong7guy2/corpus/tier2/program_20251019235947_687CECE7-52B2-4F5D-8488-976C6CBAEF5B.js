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
                        this[f16] <<= 4;
                        f20.apply(4, arguments);
                        return a6;
                    }
                    %OptimizeMaglevOnNextCall(f16);
                    return f16;
                }
                Object.defineProperty(this, "toString", { get: f15 });
            }
            const v22 = new F11();
            class C23 {
                static [v22](a25, a26, a27) {
                }
                static [v22](a29, a30, a31) {
                }
            }
        }
        new F7();
    }
}
new v3();
