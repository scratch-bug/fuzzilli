function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10; i7; i7--) {
        function f14(a15, a16, a17) {
            (typeof undefined).trimEnd();
            return F0;
        }
        %OptimizeFunctionOnNextCall(f14);
        f14(f14, i7, undefined);
    }
}
new F0(F0, F0);
