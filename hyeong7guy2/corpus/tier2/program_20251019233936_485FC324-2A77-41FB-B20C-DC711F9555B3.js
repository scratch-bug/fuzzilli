function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4() {
        function f5(a6) {
            const v10 = new Uint32Array();
            function f11(a12) {
                v10[2] &= 9007199254740992;
                class C13 {
                }
                function f14(a15, a16) {
                    f5[a12] *= -1e-15;
                    switch (C13) {
                    }
                    return a15;
                }
                return 9007199254740992;
            }
            f11.call(a3);
        }
        f5();
        f5(a2);
        %OptimizeMaglevOnNextCall(f5);
        return f5;
    }
    Object.defineProperty(this, "toString", { get: f4 });
}
const v20 = new F0();
class C21 {
    static [v20](a23, a24, a25) {
    }
}
