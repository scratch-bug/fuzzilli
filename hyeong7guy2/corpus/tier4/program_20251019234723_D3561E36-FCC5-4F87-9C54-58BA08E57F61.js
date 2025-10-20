async function f0(a1, a2) {
    function F3(a5) {
        if (!new.target) { throw 'must be called with new'; }
        ~a5;
    }
    new F3();
    new F3(f0);
    for (let i11 = 0, i12 = 10; i12; i12--) {
    }
    await f0;
    return f0;
}
f0(f0, f0);
f0();
%OptimizeFunctionOnNextCall(f0);
