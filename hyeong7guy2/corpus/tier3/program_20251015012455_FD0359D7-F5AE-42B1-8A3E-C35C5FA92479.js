function f0(a1, a2) {
    class C4 extends Float32Array {
    }
    C4[6] >>>= 10;
    arguments.b = arguments;
    return f0;
}
const t7 = f0();
t7();
%OptimizeMaglevOnNextCall(f0);
f0();
