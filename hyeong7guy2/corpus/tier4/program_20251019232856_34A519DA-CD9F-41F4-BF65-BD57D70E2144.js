with (Map) {
    function F1(a3, a4) {
        if (!new.target) { throw 'must be called with new'; }
        function f5(a6, a7, a8) {
            for (const v9 in a7) {
                typeof Map;
            }
            return F1;
        }
        f5();
        %OptimizeFunctionOnNextCall(f5);
    }
    new F1();
    new F1(Map, Map);
    new F1();
}
for (let i17 = 0, i18 = 10; i18; i18--) {
}
