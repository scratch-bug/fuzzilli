async function* f1(a2, a3, a4) {
    Object[85] **= -4294967297;
    return a4;
}
f1(f1, -4294967297, -4294967297);
const v7 = f1();
%OptimizeMaglevOnNextCall(f1);
f1(f1, v7, f1);
