function f0(a1, a2) {
    a1.cos();
    try {
        f0();
    } catch(e5) {
    }
    function F6(a8, a9) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v10 = new F6(F6, a2);
    class C11 {
        static [v10](a13, a14, a15) {
        }
    }
    a2 | a2;
    arguments[1] = a2;
    return f0;
}
f0(Math);
%OptimizeMaglevOnNextCall(f0);
try { f0.apply(); } catch (e) {}
