function f0(a1, a2, a3) {
    -BigInt(11);
}
const v8 = f0(f0, f0, f0);
const v9 = f0(f0, f0, v8);
%OptimizeFunctionOnNextCall(f0);
f0(v8, f0, v9);
