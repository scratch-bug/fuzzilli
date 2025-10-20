function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    let v4;
    try { v4 = a3.call(); } catch (e) {}
    function f5(a6, a7, a8) {
        const v9 = a7 ?? a7;
        const v11 = -197;
        const v13 = 20 >>> 20;
        function f14(a15, a16, a17) {
            const v18 = { 64: v13, [v9]: v11 };
            return v4;
        }
        f14(a6, this, a6);
        f14();
        f14();
        f14();
        f14();
        f14(f14(), a8, F0);
        f14();
        return f14();
    }
    f5();
    f5();
    %OptimizeFunctionOnNextCall(f5);
}
const v30 = new F0(F0, F0);
new F0(v30, v30);
