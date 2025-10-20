class C0 {
}
function f1() {
    function f2() {
        const v4 = new C0(...arguments);
        return v4;
    }
    f2();
    return f2;
}
class C6 extends f1 {
}
new C6();
%OptimizeFunctionOnNextCall(f1());
f1();
