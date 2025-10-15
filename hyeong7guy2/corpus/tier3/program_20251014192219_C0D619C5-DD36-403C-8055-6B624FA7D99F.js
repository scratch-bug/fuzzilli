function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f11(a12, a13) {
            try { a12.apply(F4); } catch (e) {}
            return F0;
        }
        f11(WeakMap);
        f11(Math);
        %OptimizeMaglevOnNextCall(f11);
        f11(WeakMap);
    }
    new F4();
    new F4(a3, a3, F0, F0);
}
new F0(F0, F0);
