class C1 {
}
function f2() {
    const t3 = 3198;
    t3[Symbol] = C1;
    class C4 {
    }
    const v5 = new C4();
    try { v5.constructor(f2, C1); } catch (e) {}
    return v5;
}
f2();
f2();
%OptimizeFunctionOnNextCall(f2);
f2();
