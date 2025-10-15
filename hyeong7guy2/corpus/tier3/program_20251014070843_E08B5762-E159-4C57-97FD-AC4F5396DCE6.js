class C0 {
}
function f1() {
    function f2() {
        arguments.b = arguments;
        new C0(...arguments);
        return f1;
    }
    return f2();
}
class C6 extends f1 {
}
new C6();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
