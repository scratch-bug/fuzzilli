function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function F4(a6, a7, a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
        function f11(a12, a13) {
            let v14;
            try { v14 = a12.apply(a13, F0); } catch (e) {}
            return v14;
        }
        f11(WeakMap);
        Math.apply = WeakMap;
        f11(Math);
        %OptimizeMaglevOnNextCall(f11);
        f11(F0, F4);
    }
    new F4();
}
new F0();
