let v0 = /(?<a>)*/us;
function f1(a2, a3) {
    function f4(a5, a6, a7) {
        let v8;
        try { v8 = new a5(a3, a6); } catch (e) {}
        return v0 ??= v8;
    }
    return f4(f4);
}
f1(f1, v0);
%PrepareFunctionForOptimization(f1);
%OptimizeMaglevOnNextCall(f1);
f1();
