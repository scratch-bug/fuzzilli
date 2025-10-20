const v1 = {};
function f2() {
    for (let v3 = 0; v3 < 5; v3++) {
        v3 * v3;
        v1.__lookupGetter__;
        const v11 = {
            m(a7, a8, a9, a10) {
                return v1;
            },
        };
    }
    return v1;
}
f2();
v1[Symbol] = Symbol;
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
