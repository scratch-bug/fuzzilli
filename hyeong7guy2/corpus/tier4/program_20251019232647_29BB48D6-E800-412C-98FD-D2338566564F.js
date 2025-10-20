function f0(a1, a2) {
    return f0;
}
function f3(a4, a5) {
    a5 | a5;
    class C9 {
        static [512](a11, a12) {
        }
        static 9;
    }
    arguments.o = f0;
    return f3;
}
f3();
%PrepareFunctionForOptimization(f3);
%OptimizeMaglevOnNextCall(f3);
f3();
