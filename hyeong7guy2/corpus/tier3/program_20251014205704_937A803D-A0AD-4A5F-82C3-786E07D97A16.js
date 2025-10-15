function f0() {
    return f0;
}
function f1(a2, a3) {
    a3++;
    return f0;
}
f1(f0, f0);
function f6(a7, a8) {
    a8 | a8;
    arguments.o = f1;
    return arguments["o"]();
}
const v13 = f6();
%PrepareFunctionForOptimization(f6);
%OptimizeMaglevOnNextCall(f6);
f6(v13, f0);
