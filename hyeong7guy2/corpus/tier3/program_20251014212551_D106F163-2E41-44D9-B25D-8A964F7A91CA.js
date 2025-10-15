function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = [-28740];
        class C10 {
        }
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
            -a17;
        }
        const v19 = new F12(v9, -1, C10, -9007199254740992n);
        const v20 = v19.constructor;
        new v20();
        return v20;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
new F0();
new F0();
