function f1(a2, a3, a4) {
    const v6 = new Uint8ClampedArray(2678);
    v6[297] = v6;
    const v7 = async (a8, a9, a10) => {
        return f1;
    };
    v6[2410] = v6;
    return f1;
}
const t9 = f1(f1, 2678, f1);
t9();
%OptimizeMaglevOnNextCall(f1);
f1();
