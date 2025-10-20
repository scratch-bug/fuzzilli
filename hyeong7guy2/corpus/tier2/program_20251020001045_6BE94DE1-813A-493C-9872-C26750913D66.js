function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function f5(a6, a7, a8) {
        const v10 = [-28740];
        class C11 {
        }
        C11.h = a7;
        C11.h = a4;
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            a14.flat(a6, a14, -2147483648, -2147483648);
            a17 - a17;
            function f20(a21, a22, a23, a24) {
                return a17;
            }
        }
        new F12(v10, -1, C11, -2147483648);
        return -2147483648;
    }
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v27 = new F1(-2147483648, -2147483648);
const v28 = new F1(-2147483648, v27);
const t24 = v28.constructor;
new t24();
