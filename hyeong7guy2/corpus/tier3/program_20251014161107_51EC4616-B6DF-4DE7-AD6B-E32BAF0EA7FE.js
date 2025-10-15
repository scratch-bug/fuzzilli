async function f0(a1, a2) {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        Array(this[1]);
    }
    new F3(a2);
    new F3();
    await f0;
    return f0;
}
f0();
f0();
%OptimizeFunctionOnNextCall(f0);
