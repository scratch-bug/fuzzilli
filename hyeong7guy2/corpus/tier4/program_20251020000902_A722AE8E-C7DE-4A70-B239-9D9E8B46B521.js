function f0(a1, a2) {
    function f3(a4) {
        return a4;
    }
    f3.prototype = f3;
    f3[0] = a1;
    let v5 = f3.bind();
    return f3;
}
const v6 = f0(f0, f0);
%PrepareFunctionForOptimization(f0);
%OptimizeFunctionOnNextCall(f0);
f0(v6, f0);
