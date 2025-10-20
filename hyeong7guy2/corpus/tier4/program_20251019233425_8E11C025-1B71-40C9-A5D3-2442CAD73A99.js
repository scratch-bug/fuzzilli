class C0 {
}
function f1() {
    function f2() {
        arguments.b = arguments;
        try { new C0(...arguments); } catch (e) {}
        return arguments;
    }
    const v5 = f2();
    f2();
    f2();
    f2();
    f2();
    return v5;
}
class C10 extends f1 {
}
new C10();
new C10();
%OptimizeFunctionOnNextCall(f1);
f1();
