function f0(a1, a2, a3) {
    +(a1++);
    return a3;
}
const v6 = f0();
const v7 = f0(f0, f0, v6);
%OptimizeMaglevOnNextCall(f0);
f0(v6, v7, v6);
