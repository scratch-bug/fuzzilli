function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f5() {
        function F6() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v8 = new F6();
        const v9 = v8.constructor;
        new v9(v9, F6, v9, f5, v8, F6, 1, F6);
        return f5;
    }
    const v11 = f5();
    v11();
    %OptimizeFunctionOnNextCall(f5);
    v11();
}
new F0(F0, F0);
