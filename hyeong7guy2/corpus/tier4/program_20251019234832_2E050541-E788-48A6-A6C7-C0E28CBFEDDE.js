class C0 {
}
function f1() {
    function f2() {
        const v4 = new C0(...arguments);
        const v5 = v4.constructor;
        v5.apply(arguments, v5);
        return v4;
    }
    try { f2(); } catch (e) {}
    return f2;
}
f1();
class C9 extends f1 {
}
new C9();
%OptimizeFunctionOnNextCall(f1);
f1();
