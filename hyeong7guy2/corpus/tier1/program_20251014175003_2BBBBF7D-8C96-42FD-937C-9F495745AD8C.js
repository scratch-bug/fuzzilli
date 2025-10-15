function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        function F8(a10, a11, a12, a13) {
            if (!new.target) { throw 'must be called with new'; }
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                function f19() {
                    return 0.921889653063343;
                }
                Object.defineProperty(a17, "valueOf", { configurable: true, value: f19 });
                function f20(a21, a22, a23) {
                    const v25 = [-28740];
                    class C26 {
                    }
                    function F28(a30, a31, a32, a33) {
                        if (!new.target) { throw 'must be called with new'; }
                        const t17 = a33.constructor;
                        t17(a22);
                    }
                    new F28(v25, -1, C26, -9007199254740992n);
                    return F28;
                }
                f20(f20, a17);
            }
            new F15(F15);
        }
        new F8(this, f4, f4, this);
        return a6;
    }
    try { f4(); } catch (e) {}
    %OptimizeFunctionOnNextCall(f4);
}
const v41 = new F0();
const v42 = new F0(v41, v41);
new F0(v42, v41);
