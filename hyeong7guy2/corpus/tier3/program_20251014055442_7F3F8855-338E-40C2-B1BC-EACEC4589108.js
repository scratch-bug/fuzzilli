async function* f1(a2, a3) {
    const v4 = await false;
    const v5 = v4 || v4;
    v5 && v5;
    return v5;
}
f1().next();
%OptimizeMaglevOnNextCall(f1);
