class C0 {
}
function f1() {
    function f2() {
        new C0(...arguments);
        for (let i = 0; i < 5; i++) {
            arguments.e = 0;
        }
        return C0;
    }
    f2();
    return f2;
}
class C7 extends f1 {
}
new C7();
f1();
%OptimizeFunctionOnNextCall(f1);
f1();
