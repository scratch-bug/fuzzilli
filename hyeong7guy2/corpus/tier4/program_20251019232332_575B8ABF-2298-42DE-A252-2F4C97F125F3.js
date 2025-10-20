function f1(a2, a3, a4) {
    try { BigInt.asIntN(-3.829874662103787, a4); } catch (e) {}
    return f1;
}
const t4 = f1();
const v8 = t4();
%OptimizeFunctionOnNextCall(f1);
f1(v8, v8, -3.829874662103787);
