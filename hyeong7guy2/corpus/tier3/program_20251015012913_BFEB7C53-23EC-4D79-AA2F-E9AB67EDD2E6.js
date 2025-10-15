async function* f0(a1, a2, a3, a4) {
    const v5 = a4 >>> a4;
    await v5;
    return v5;
}
const v7 = f0();
v7.next(v7);
%OptimizeMaglevOnNextCall(f0);
