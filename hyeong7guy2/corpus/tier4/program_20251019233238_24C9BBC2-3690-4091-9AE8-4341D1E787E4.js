function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F15(a17, a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                this.e = Float64Array;
            }
            const v20 = new F15();
            v20.e;
        }
        new F8();
        return F0;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0(F0, F0);
new F0();
new F0(v24, v24);
