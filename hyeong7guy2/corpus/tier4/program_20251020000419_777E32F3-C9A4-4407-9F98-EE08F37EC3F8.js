const v1 = {};
function f2() {
    for (let v3 = 0; v3 < 5; v3++) {
        v1.__lookupGetter__;
        const v5 = [0.08713699408720299,1000000.0,4.0,-1000000000.0,0.8109445590563051,NaN,-1000000000.0,2.220446049250313e-16,2.0];
        function f6() {
            return v5;
        }
        f6();
    }
    return Symbol;
}
f2();
v1[Symbol] = Symbol;
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
