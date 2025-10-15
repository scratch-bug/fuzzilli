async function* f1(a2, a3, a4, a5) {
    const t1 = 9;
    t1.buffer ^= 9;
    await a4;
    return a2;
}
const v7 = f1(f1, 9, f1, 9);
v7.next(v7);
%OptimizeMaglevOnNextCall(f1);
