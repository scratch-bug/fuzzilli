function f1(a2, a3) {
    let v4;
    try { v4 = a3(BigUint64Array, a3); } catch (e) {}
    for (let v5 = 0; v5 < 5; v5++) {
    }
    return v4;
}
f1(f1, f1);
%OptimizeFunctionOnNextCall(f1);
f1();
