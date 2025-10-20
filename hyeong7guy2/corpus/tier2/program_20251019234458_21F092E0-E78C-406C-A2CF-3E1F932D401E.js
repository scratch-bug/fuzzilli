for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9() {
    for (let v11 = 0; v11 < 5; v11++) {
        const v12 = {};
        (v11 % v11 ? v12 : 4).__lookupGetter__;
        const v21 = {
            m(a17, a18, a19, a20) {
                return a18;
            },
        };
    }
    return 4;
}
f9();
%PrepareFunctionForOptimization(f9);
%OptimizeFunctionOnNextCall(f9);
f9();
