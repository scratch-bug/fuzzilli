const v1 = ("HJVr").normalize();
function f2(a3) {
    function f4() {
        return f4;
    }
    let v5;
    try { v5 = f4.bind(v1); } catch (e) {}
    return v5(f2);
}
const v7 = f2("HJVr");
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
f2(v7);
