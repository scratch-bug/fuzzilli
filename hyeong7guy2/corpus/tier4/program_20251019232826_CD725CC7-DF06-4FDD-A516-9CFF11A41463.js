const v0 = [-2.0,311.20884723584527,1000.0,-1.186552188623687e+307];
function f2(a3, a4) {
    const v5 = a4 | a4;
    function f7(a8, a9) {
        a8.pop();
        return v5;
    }
    f7(v0, -65535n, arguments);
    return arguments;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeMaglevOnNextCall(f2);
f2();
