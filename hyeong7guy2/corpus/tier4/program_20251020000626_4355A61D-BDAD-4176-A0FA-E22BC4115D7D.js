function f0(a1, a2, a3) {
    for (let i5 = false; i5 < 20000; Math.tanh(i5), ++i5) {
    }
    return a3;
}
f0.call(f0, f0, f0, f0, f0);
f0();
%OptimizeMaglevOnNextCall(f0);
f0();
