function f1(a2, a3) {
    const v4 = a2.log2;
    const v5 = v4(v4);
    v5 | v5;
    257 + a2;
    try {
        f1(v5, v5);
    } catch(e9) {
    }
    arguments[1] = 257;
    return a2;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
try { f1(); } catch (e) {}
