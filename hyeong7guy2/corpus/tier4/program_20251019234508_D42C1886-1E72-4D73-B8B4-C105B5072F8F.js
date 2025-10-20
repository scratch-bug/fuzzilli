function f0(a1) {
    for (let v2 = 0; v2 < 5; v2++) {
        typeof f0;
        eval();
    }
    return a1;
}
f0(f0);
const v7 = f0(f0);
%OptimizeMaglevOnNextCall(f0);
f0(v7);
