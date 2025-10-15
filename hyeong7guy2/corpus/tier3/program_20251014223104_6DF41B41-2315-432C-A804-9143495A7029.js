async function* f1(a2, a3) {
    f1(WeakMap);
    %PrepareFunctionForOptimization(f1);
    f1(WeakMap);
    f1(WeakMap);
    await a3;
    yield* WeakMap;
}
f1(WeakMap, WeakMap);
function F9(a11, a12, a13, a14) {
    if (!new.target) { throw 'must be called with new'; }
    f1(this, a13);
    %OptimizeFunctionOnNextCall(f1);
    f1();
}
new F9();
