function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F14() {
                if (!new.target) { throw 'must be called with new'; }
            }
            const v16 = new F14();
            return v16;
        }
        const v17 = new F8();
        return v17;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
const v20 = new F0();
new F0(F0, v20);
