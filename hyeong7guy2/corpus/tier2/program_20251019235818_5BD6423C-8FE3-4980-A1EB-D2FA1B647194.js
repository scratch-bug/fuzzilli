for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9() {
    for (let v10 = 0; v10 < 5; v10++) {
        v10 % v10;
        const v17 = {
            m(a13, a14, a15, a16) {
                return v10;
            },
        };
    }
    return f9;
}
f9();
%PrepareFunctionForOptimization(f9);
%OptimizeFunctionOnNextCall(f9);
f9();
