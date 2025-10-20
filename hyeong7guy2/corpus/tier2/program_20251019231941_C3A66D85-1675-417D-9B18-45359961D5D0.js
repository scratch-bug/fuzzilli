const v0 = [1000000000.0,-2.0,-1.4687199713030472e+308,0.7618106721184591,1.5532776194695038e+308,5.0,260.3625996470837,1.7976931348623157e+308,-575392.809777949,-728.5572843126145];
function f1(a2, a3) {
    const v5 = Symbol.toPrimitive;
    a2[v5] = f1;
    try { a2(v0); } catch (e) {}
    return v5;
}
f1(f1);
%OptimizeFunctionOnNextCall(f1);
f1(f1);
