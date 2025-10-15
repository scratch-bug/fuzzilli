class C0 {
}
function f1() {
    function f2() {
        arguments.b = arguments;
        new C0(...arguments);
        return C0;
    }
    f2();
    f2();
    f2();
    return f1;
}
class C8 extends f1 {
}
new C8();
new C8();
%OptimizeFunctionOnNextCall(f1);
f1();
