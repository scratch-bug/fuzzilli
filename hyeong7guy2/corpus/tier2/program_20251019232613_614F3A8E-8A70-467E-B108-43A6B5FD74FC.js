const v0 = {};
function f1() {
    return f1;
}
function f2() {
    const v8 = {
        m(a4, a5, a6, a7) {
            return a6;
        },
    };
    const v10 = [v0];
    Reflect.apply(v8.m, v0, v10);
    v10 instanceof f1;
    return v8;
}
f2();
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2();
