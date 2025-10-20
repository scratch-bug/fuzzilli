function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = new Uint32Array();
            function f11(a12) {
                v10[2] &= 9007199254740992;
                class C13 {
                }
                const v14 = C13.prototype;
                function f15(a16, a17) {
                    f5[a12] *= -1e-15;
                    switch (C13) {
                        case C13:
                            a3(a2, a17, v14);
                            break;
                    }
                    return F0;
                }
                return F0;
            }
            f11.call();
        }
        f5();
        f5(F0);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v22 = new F0();
class C23 {
    static [v22](a25, a26, a27) {
    }
}
