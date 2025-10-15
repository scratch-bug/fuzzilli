function f1(a2, a3) {
    const v4 = a2.log2;
    v4(a3, v4, v4, f1);
    const v6 = 257 ?? a3;
    v6 + v6;
    class C8 {
    }
    C8.b = C8;
    try {
        f1();
    } catch(e10) {
        e10.b = e10;
    }
    arguments[1] = arguments;
    return a3;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(257, f1); } catch (e) {}
