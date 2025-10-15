const v0 = [];
function f2() {
    v0.length |= 268435456;
    return f2;
}
function f4(a5, a6) {
    f2();
    %PrepareFunctionForOptimization(f2);
    %OptimizeMaglevOnNextCall(f2);
    return f2();
}
Int32Array.valueOf = f4;
let v9 = 2;
v9 /= Int32Array;
