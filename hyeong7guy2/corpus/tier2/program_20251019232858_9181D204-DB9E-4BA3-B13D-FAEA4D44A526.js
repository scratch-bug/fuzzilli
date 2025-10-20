function f1(a2, a3, a4) {
    const v10 = {
        construct(a6, a7) {
            const v8 = a6.construct;
            return v8 || v8;
        },
    };
    v10.construct(11);
    v10.construct(v10);
    return f1;
}
f1.call();
f1(11, 11, f1);
%OptimizeMaglevOnNextCall(f1);
f1();
