const v1 = Intl.NumberFormat;
const v2 = v1();
function f4() {
    const v5 = new Date(v1);
    return v5.setUTCMilliseconds(v2);
}
f4();
%PrepareFunctionForOptimization(f4);
%OptimizeFunctionOnNextCall(f4);
f4();
