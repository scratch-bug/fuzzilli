function f1(a2, a3) {
    a2.log2;
    const v5 = 257 ?? a3;
    v5 / v5;
    class C7 {
    }
    C7.b = C7;
    try {
        f1();
    } catch(e9) {
    }
    arguments[0] = arguments;
    return 257;
}
f1(Math);
%OptimizeMaglevOnNextCall(f1);
f1(257);
