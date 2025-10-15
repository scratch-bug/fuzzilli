function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return f4;
            }
            function f15(a16) {
                for (let v18 = 0; v18 < 5; v18++) {
                    const v19 = 1 - v18;
                    const v21 = {
                        get g() {
                            return v19;
                        },
                    };
                }
                return F0;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v22 = new F8(a6, F0, a3, a2);
        v22.e = v22;
        return a3;
    }
    f4(f4, this, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0();
new F0(v24, F0);
new F0(v24, F0);
