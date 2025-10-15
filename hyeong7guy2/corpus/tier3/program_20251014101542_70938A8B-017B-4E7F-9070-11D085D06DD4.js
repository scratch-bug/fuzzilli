function F0(a2, a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    function F5(a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        function f9(a10, a11, a12) {
            ([F0,F0,F0]).at(a11);
            return a10;
        }
        f9(a8, a8, a3);
        %OptimizeFunctionOnNextCall(f9);
    }
    new F5();
    new F5();
}
const v18 = new F0();
const t15 = v18.constructor;
new t15();
