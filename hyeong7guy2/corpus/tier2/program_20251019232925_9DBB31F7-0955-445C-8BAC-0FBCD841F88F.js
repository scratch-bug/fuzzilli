function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            function F7(a9, a10) {
                if (!new.target) { throw 'must be called with new'; }
                function f11() {
                    function f12(a13) {
                        f12[4] | 7;
                        const v18 = { a: 6.651764215497106 };
                        f5 & f12;
                        try {
                            v18.asIntN();
                        } catch(e21) {
                        }
                    }
                    f12();
                    %OptimizeMaglevOnNextCall(f12);
                    return f12;
                }
                f11();
                Object.defineProperty(this, "toString", { get: f11 });
            }
            const v24 = new F7();
            class C25 {
                static [v24](a27, a28, a29) {
                }
            }
        }
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v30 = new F0(F0, F0);
class C31 {
    static [v30](a33, a34, a35) {
    }
}
