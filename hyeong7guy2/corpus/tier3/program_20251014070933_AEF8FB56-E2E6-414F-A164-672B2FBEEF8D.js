function f0() {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        try {
            Array(-339025740);
        } catch(e6) {
        }
    }
    new F1();
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
f0();
