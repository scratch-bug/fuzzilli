function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    with (Uint16Array) {
        async function f5(a6) {
            !Promise;
            await Promise;
            return f5;
        }
        f5(F1);
        f5();
        %OptimizeMaglevOnNextCall(f5);
    }
}
new F1(F1, Uint16Array);
