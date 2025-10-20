function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    try { new a3(); } catch (e) {}
    function f5(a6, a7, a8) {
        const v9 = a7 ?? a7;
        const v11 = -197;
        const v13 = 20 >>> 20;
        function f14(a15, a16, a17) {
            try { a16(a3, a17, a16, a16, a7); } catch (e) {}
            const v19 = { 64: v13, [v9]: v11 };
            return v13;
        }
        const v20 = f14();
        const v21 = f14();
        f14(v9, f14(), a7);
        const v24 = f14(F0, a2, a6);
        f14(v21, a3, f14(197, F0, v20));
        f14(F0, v21, v24);
        f14();
        return a3;
    }
    f5(F0, a2, F0);
    %OptimizeFunctionOnNextCall(f5);
}
new F0(F0, F0);
new F0(F0, F0);
