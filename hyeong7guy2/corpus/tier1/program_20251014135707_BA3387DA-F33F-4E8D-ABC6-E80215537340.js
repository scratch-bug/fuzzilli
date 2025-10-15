function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a2;
            }
            function f15(a16) {
                for (let v18 = 0; v18 < 5; v18++) {
                    1 * v18;
                    const v21 = {
                        get g() {
                            return a16;
                        },
                    };
                }
                return 1;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v22 = new F8(F8, f4, F0, this);
        v22.e = v22;
        return a2;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
