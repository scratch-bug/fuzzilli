function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        function F10(a12, a13, a14, a15) {
            if (!new.target) { throw 'must be called with new'; }
            try { a14.apply(); } catch (e) {}
        }
        new F10(a7, a7, F2);
        return F10;
    }
    try { f6.apply(withPlainTime, 16); } catch (e) {}
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2();
const v21 = new F2();
const t16 = v21.constructor;
new t16();
