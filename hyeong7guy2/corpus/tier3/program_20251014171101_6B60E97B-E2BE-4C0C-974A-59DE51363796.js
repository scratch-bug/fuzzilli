class C0 {
}
function f1() {
    function f2() {
        arguments?.__lookupGetter__;
        const v5 = new C0(...arguments);
        return v5;
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
