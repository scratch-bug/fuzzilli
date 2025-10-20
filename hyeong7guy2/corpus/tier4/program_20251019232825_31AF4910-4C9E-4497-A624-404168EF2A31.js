class C0 {
}
function f1() {
    function f2() {
        new C0(...arguments);
        return f1;
    }
    for (let i = 0; i < 5; i++) {
        f2();
        %OptimizeFunctionOnNextCall(f2);
    }
    return f1;
}
class C6 extends f1 {
}
new C6();
