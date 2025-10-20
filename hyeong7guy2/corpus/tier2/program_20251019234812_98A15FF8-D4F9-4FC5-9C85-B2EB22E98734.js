function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    const v4 = {};
    function f6(a7, a8) {
        const v9 = a7.log2;
        v9(v9, v9);
        const v11 = 257 ?? a8;
        v11 + v11;
        class C13 {
        }
        C13.b = v4;
        C13.b = C13;
        try {
            f6();
        } catch(e15) {
            e15.b = e15;
            e15.b = e15;
        }
    }
    f6(Math);
    %OptimizeMaglevOnNextCall(f6);
    try { f6(); } catch (e) {}
}
new F0();
