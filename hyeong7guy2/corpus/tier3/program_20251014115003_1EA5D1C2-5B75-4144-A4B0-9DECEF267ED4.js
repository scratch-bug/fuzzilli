class C0 {
}
function f1() {
    function f2() {
        arguments.b = arguments;
        const v4 = new C0(...arguments);
        return v4;
    }
    f2();
    return f2();
}
class C7 extends f1 {
}
new C7();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
