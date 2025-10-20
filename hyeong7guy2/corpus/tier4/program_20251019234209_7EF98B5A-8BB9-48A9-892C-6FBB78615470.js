class C0 {
}
function f1() {
    function f2() {
        new C0(...arguments);
        return arguments;
    }
    f2().length;
    return C0;
}
f1();
class C8 extends f1 {
}
new C8();
%OptimizeFunctionOnNextCall(f1);
f1();
