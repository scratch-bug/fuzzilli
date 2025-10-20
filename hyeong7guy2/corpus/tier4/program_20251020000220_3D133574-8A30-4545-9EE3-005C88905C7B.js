async function* f1(a2, a3, a4) {
    Object[85] **= -4294967297;
    return a4;
}
f1(-4294967297, f1, -4294967297).next();
%OptimizeMaglevOnNextCall(f1);
