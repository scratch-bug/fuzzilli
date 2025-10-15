(-1063493304 + [5.647168965063237,1.0,3.0,-5.0,3.0]) ^ -1063493304;
class C4 {
}
function f5() {
    function f6() {
        new C4(...arguments);
        return f6;
    }
    return f6();
}
class C10 extends f5 {
}
new C10();
f5();
%OptimizeFunctionOnNextCall(f5);
f5();
