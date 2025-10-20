function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    function f4(a5, a6, a7) {
        class C8 {
        }
        for (const v11 in Int32Array) {
        }
        function F12(a14, a15, a16, a17) {
            if (!new.target) { throw 'must be called with new'; }
        }
        try { C8.m(F0, f4, Int32Array, F0, F0); } catch (e) {}
        const v20 = Symbol.dispose;
        const v22 = {
            [v20]() {
            },
        };
        using v23 = v22;
        new F12(1073741824, f4);
        Object.defineProperty(C8, arguments, { writable: true, enumerable: true, value: arguments });
        return a3;
    }
    f4(F0, f4, this);
    %OptimizeFunctionOnNextCall(f4);
}
const v27 = new F0();
const v28 = new F0(F0, v27);
new F0(v28, v28);
