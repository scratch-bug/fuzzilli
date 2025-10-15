function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v10 = Math.trunc(f4);
        const v12 = +(!NaN);
        class C13 {
        }
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            Object.defineProperty(a19, 8, { writable: true, configurable: true, value: v10 });
        }
        return v12;
    }
    f4(F0, this, a2);
    %OptimizeFunctionOnNextCall(f4);
}
new F0(F0, F0);
new F0();
new F0();
