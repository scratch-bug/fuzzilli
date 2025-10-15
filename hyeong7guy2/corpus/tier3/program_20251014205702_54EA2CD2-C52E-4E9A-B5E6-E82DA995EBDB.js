function f0() {
    return f0;
}
const v1 = class extends f0 {
}
function f2(a3, a4) {
    return delete v1.length;
}
function f6(a7, a8) {
    a8 | a8;
    arguments.o = f2;
    return arguments["o"]();
}
f6();
%PrepareFunctionForOptimization(f6);
%OptimizeMaglevOnNextCall(f6);
f6();
