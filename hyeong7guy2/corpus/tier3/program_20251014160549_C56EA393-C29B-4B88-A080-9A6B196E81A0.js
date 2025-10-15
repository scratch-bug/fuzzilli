const v0 = class {
}
class C1 extends v0 {
}
function f3(a4, a5) {
    a5 | a5;
    C1[1] = a4;
    try { arguments["o"](); } catch (e) {}
    -13 !== a5;
    return a5;
}
f3();
%PrepareFunctionForOptimization(f3);
%OptimizeMaglevOnNextCall(f3);
f3();
