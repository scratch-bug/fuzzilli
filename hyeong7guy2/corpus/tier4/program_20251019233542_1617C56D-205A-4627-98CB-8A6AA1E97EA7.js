async function* f0(a1, a2, a3) {
    eval(a3);
    return a3;
}
const v6 = f0();
v6.next(v6);
%OptimizeMaglevOnNextCall(f0);
