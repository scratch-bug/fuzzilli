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
                        const t15 = f20.apply(4, arguments);
                        t15();
                    }
                    %OptimizeMaglevOnNextCall(f16);
                    return f16;
                }
                Object.defineProperty(this, "toString", { get: f15 });
            }
            const v23 = new F11();
            class C24 {
                static [v23](a26, a27, a28) {
                }
                static [v23](a30, a31, a32) {
                }
            }
        }
        new F7();
    }
}
new v3(F0, v3);
