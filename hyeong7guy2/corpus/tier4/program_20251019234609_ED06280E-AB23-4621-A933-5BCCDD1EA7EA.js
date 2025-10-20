function f2(a3) {
    a3[Symbol.toPrimitive] = f2;
    let v6;
    try { v6 = (-1565008628n).constructor(a3); } catch (e) {}
    return v6;
}
f2(f2);
%OptimizeFunctionOnNextCall(f2);
f2(11);
