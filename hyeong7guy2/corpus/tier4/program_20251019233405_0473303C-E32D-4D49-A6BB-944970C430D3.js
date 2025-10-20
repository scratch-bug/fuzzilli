function f1(a2) {
    function f4() {
        return f4;
    }
    let v5;
    try { v5 = new f4(); } catch (e) {}
    f4.apply(4, arguments);
    return v5;
}
f1();
f1(4);
%OptimizeFunctionOnNextCall(f1);
f1(4);
