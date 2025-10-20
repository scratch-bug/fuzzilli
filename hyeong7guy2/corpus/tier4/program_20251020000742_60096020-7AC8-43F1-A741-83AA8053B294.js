function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        String.prototype.concat.apply("function", [F2,F2,F2,F2,F2]).codePointAt(-60597);
        return a7;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v17 = new F2();
const v18 = new F2("function", v17);
const t11 = v18.constructor;
new t11();
