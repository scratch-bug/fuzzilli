function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        async function f5(a6) {
            await Promise;
            Error();
            return this;
        }
        f5();
        f5(this);
        %OptimizeMaglevOnNextCall(f5);
    }
}
new F1();
