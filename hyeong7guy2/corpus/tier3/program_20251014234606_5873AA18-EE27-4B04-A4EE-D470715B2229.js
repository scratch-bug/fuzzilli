function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        a7 ?? a7;
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            try { a15.apply(); } catch (e) {}
        }
        const v18 = new F11(a7, a9, F2);
        return v18;
    }
    try { f6.apply(Int32Array, 16); } catch (e) {}
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
new F2(16, F2);
const v22 = new F2();
const t17 = v22.constructor;
new t17();
