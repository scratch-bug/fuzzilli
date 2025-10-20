const v1 = new BigUint64Array();
function f2() {
    for (let v3 = 0; v3 < 5; v3++) {
        const v5 = new Map();
        try { v5.has(v1); } catch (e) {}
        const v12 = {
            m(a8, a9, a10, a11) {
                return a8;
            },
        };
    }
    return f2;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
