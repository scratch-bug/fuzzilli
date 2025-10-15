function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14() {
                return a13;
            }
            function f15(a16) {
                for (let v17 = 0; v17 < 5; v17++) {
                    v17++;
                    v17 & v17;
                    const v21 = {
                        get g() {
                            return a6;
                        },
                    };
                }
                return a7;
            }
            Object.defineProperty(this, "e", { get: f14, set: f15 });
        }
        const v22 = new F8();
        v22.e = v22;
        return a2;
    }
    f4(F0, F0, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0();
const t30 = v24.constructor;
new t30();
const t32 = v24.constructor;
new t32();
