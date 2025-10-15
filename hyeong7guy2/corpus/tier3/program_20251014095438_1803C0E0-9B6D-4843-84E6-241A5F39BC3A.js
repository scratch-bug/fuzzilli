async function* f0(a1, a2, a3) {
    return a2;
}
f0(f0, f0, f0);
const v5 = f0();
v5.b = v5;
v5.e = v5;
%OptimizeFunctionOnNextCall(f0);
f0();
