const v0 = {};
function f2(a3, a4) {
    const t2 = a3.log2;
    t2();
    const v7 = 257 ?? a4;
    v7 + v7;
    class C9 {
    }
    C9.b = v0;
    C9.b = C9;
    try {
        f2();
    } catch(e11) {
        e11.b = e11;
    }
    return v7;
}
f2(Math);
%OptimizeMaglevOnNextCall(f2);
try { f2(); } catch (e) {}
