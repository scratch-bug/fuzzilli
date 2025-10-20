function f0(a1, a2, a3) {
    a3 | a3;
    const v9 = {
        construct(a6, a7) {
            a6?.__defineGetter__;
            return f0;
        },
    };
    v9.construct(a3);
    v9.construct(v9);
    return f0;
}
const v12 = f0();
const v13 = v12();
%OptimizeMaglevOnNextCall(f0);
f0(v13, v12, v12);
