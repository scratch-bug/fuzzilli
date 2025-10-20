class C1 extends Map {
}
const v2 = new C1();
function f3(a4, a5) {
    function f6(a7, a8, a9) {
        const t5 = v2.get;
        return t5(C1);
    }
    try { f6(); } catch (e) {}
    return v2;
}
f3(Map, Map);
f3();
%OptimizeFunctionOnNextCall(f3);
f3(v2, f3);
