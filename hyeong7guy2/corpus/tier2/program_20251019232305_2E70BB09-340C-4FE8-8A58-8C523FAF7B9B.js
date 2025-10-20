for (let i2 = 0, i3 = 10; i3; i3--) {
}
function f9() {
    for (let v11 = 0; v11 < 5; v11++) {
        const v12 = { milliseconds: v11 };
        (v11 % v11 ? v12 : 4).__lookupGetter__;
    }
    return 4;
}
f9();
%PrepareFunctionForOptimization(f9);
%OptimizeFunctionOnNextCall(f9);
f9();
