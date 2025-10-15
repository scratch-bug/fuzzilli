function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        try { a7.call(a8, a7); } catch (e) {}
        return f6;
    }
    f6(a5);
    %OptimizeFunctionOnNextCall(f6);
}
const v12 = new F2(F2, F2);
const t10 = v12.constructor;
new t10(9, "9");
new F2("9", F2);
