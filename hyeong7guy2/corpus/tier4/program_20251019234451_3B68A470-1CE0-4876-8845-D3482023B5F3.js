function f0() {
    function f1() {
        Reflect.construct(arguments, arguments);
        return arguments;
    }
    try { f1(); } catch (e) {}
    return f1;
}
class C6 extends f0 {
}
new C6();
new C6();
%OptimizeFunctionOnNextCall(f0);
f0();
