function f0(a1, a2, a3) {
    a3 | a3;
    const v9 = {
        construct(a6, a7) {
            a6 | a6;
            return a7;
        },
    };
    v9.construct(v9);
    return f0;
}
const t11 = f0();
t11();
%OptimizeMaglevOnNextCall(f0);
f0();
