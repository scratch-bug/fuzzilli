const v1 = [-2.0,311.20884723584527,1000.0,-1.186552188623687e+307];
function f3(a4, a5) {
    const v6 = a5 | a5;
    function f8(a9, a10) {
        try { a9.forEach(undefined); } catch (e) {}
        return a4;
    }
    f8(v1, -65535n, arguments);
    return v6;
}
f3();
%PrepareFunctionForOptimization(f3);
%OptimizeMaglevOnNextCall(f3);
f3();
