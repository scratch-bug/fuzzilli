class C2 {
}
function f3() {
    function f4() {
        new C2(...arguments);
        return arguments;
    }
    f4(WeakMap, -1063493304);
    return f4;
}
class C8 extends f3 {
}
new C8();
f3();
%OptimizeFunctionOnNextCall(f3);
f3();
