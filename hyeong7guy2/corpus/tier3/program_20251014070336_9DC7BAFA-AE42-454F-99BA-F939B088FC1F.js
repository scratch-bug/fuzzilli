async function* f1(a2, a3) {
    const v4 = await false;
    const v5 = v4 && v4;
    v5 || v5;
    return v5;
}
const v7 = f1();
v7.next(v7);
%OptimizeMaglevOnNextCall(f1);
