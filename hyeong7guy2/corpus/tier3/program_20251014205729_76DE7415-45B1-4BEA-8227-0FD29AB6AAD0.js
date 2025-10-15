function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            eval(a12);
        }
        function f16(a17) {
            return F0;
        }
        for (let v18 = 0; v18 < 5; v18++) {
        }
        function f19(a20, a21, a22) {
            return a21;
        }
        return this;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
const v24 = new F0();
const v25 = new F0();
new F0(v24, v25);
