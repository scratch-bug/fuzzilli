function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        const v9 = Math.sinh(f4);
        class C10 {
        }
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
            Object.defineProperty(a16, 8, { writable: true, configurable: true, value: v9 });
        }
        return F11;
    }
    f4();
    %OptimizeFunctionOnNextCall(f4);
}
new F0();
const v19 = new F0();
new F0(v19, F0);
