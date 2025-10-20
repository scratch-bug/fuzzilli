const v1 = Symbol.iterator;
function f2(a3, a4, a5) {
    for (let i6 = v1; i6 < 25000;) {
    }
    return a5;
}
try { f2(); } catch (e) {}
%PrepareFunctionForOptimization(f2);
%OptimizeFunctionOnNextCall(f2);
try { f2(v1, f2, v1); } catch (e) {}
