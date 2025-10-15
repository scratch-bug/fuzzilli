function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            eval();
        }
        function f16(a17) {
            return F8;
        }
        const v19 = {};
        `3${536870888n}valueOf${Array}boolean`;
        function f22(a23, a24, a25) {
            return a24;
        }
    }
    f4(F0, this, f4);
    %OptimizeFunctionOnNextCall(f4);
}
const v27 = new F0();
const v28 = v27.constructor;
const v29 = new v28(v28, F0, v28, v28);
new F0(v29, v29);
