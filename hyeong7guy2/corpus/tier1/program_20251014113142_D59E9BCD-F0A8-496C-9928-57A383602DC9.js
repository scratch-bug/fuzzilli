async function f0(a1, a2) {
    function F4(a6) {
        if (!new.target) { throw 'must be called with new'; }
        a6++;
        Object.defineProperty(this, "a", { writable: true, configurable: true, value: a6 });
    }
    new F4(177);
    new F4(f0);
    for (let i12 = 0, i13 = 10; i13; i13--) {
    }
    await f0;
    return f0;
}
f0(f0, f0);
f0(f0, f0);
%OptimizeFunctionOnNextCall(f0);
