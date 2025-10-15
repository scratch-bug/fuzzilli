function f0(a1, a2, a3) {
    a3 >>> a3;
    const v8 = {
        construct(a6, a7) {
            return a3;
        },
    };
    return f0;
}
const v9 = {};
const v10 = f0();
v10(v10, v9, v9);
%OptimizeMaglevOnNextCall(f0);
f0();
