function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function f14(a15) {
                return a11;
            }
            f14.prototype = f14;
            let v16 = f14.bind();
        }
        new F8();
        return a2;
    }
    f4(F0, f4, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v19 = new F0();
new F0();
new F0(v19, v19);
