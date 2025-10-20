function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            const v18 = {
                construct(a15, a16) {
                    return Reflect;
                },
            };
            const v19 = v18.construct(a10, a7);
            try { v19.construct(); } catch (e) {}
        }
        new F8(F0, a6, this, F8);
        return a3;
    }
    f4(this, this, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v23 = new F0(F0, F0);
const v24 = new F0(F0, F0);
const v25 = v24.constructor;
new v25(v23, F0, v25);
