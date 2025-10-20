class C0 {
}
function f1() {
    const v2 = new C0();
    const v3 = v2?.constructor;
    let v4;
    try { v4 = v3.call(); } catch (e) {}
    return v4;
}
f1.call(C0);
class C6 extends f1 {
}
new C6();
%OptimizeFunctionOnNextCall(f1);
f1();
