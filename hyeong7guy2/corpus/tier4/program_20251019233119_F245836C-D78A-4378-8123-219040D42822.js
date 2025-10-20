function F0(a2) {
    if (!new.target) { throw 'must be called with new'; }
    function F3(a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        function f7(a8, a9, a10) {
            const v12 = [-28740];
            class C13 {
            }
            function F15(a17, a18, a19, a20) {
                if (!new.target) { throw 'must be called with new'; }
                a20 & a20;
            }
            const v22 = new F15(v12, -1, C13, -9007199254740992n);
            const t13 = v22.constructor;
            new t13();
            return a5;
        }
        f7();
        %OptimizeFunctionOnNextCall(f7);
    }
    const v26 = new F3(a2, F0);
    const v27 = v26.constructor;
    new v27(F0, this, F3, a2, v27);
    const t23 = v26.constructor;
    new t23(F0, F0, F3, this);
}
new F0(F0);
