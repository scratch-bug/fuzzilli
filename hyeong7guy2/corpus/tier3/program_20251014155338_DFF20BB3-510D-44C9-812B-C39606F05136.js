function f0(a1, a2) {
    let v3 = a2--;
    v3++;
    a2 | a2;
    arguments[1] = arguments;
    return a2;
}
const v7 = f0.call(f0, f0, f0, f0, f0);
f0(v7, v7);
%OptimizeMaglevOnNextCall(f0);
f0(f0, v7);
