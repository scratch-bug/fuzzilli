function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let i6 = 0, i7 = 10; i7; i7--) {
        function f14(a15, a16, a17) {
            a15.length;
            const v19 = typeof undefined;
            v19.length;
            v19.trimEnd();
            return undefined;
        }
        %OptimizeFunctionOnNextCall(f14);
        f14(f14);
    }
}
new F0();
