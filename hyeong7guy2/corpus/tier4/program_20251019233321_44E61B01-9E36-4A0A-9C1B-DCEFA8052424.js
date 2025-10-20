function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function f8(a9) {
            let v11 = Math.log1p(f8);
            return v11--;
        }
        return f8();
    }
    f4(a2, a3, F0);
    %OptimizeFunctionOnNextCall(f4);
}
const v15 = new F0(F0, F0);
const v16 = new F0(F0, v15);
new F0(v15, v16);
