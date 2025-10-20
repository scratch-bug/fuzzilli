const v2 = new WeakMap();
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    function f8(a9, a10, a11) {
        function F14(a16, a17, a18, a19) {
            if (!new.target) { throw 'must be called with new'; }
            a18.g = v2;
            a19--;
            for (const v21 in 512) {
            }
            const v22 = Symbol.dispose;
            const v24 = {
                [v22]() {
                },
            };
            using v25 = v24;
        }
        new F14(Int8Array, 1825, F14);
        return 1825;
    }
    f8(Symbol, this, 512);
    %OptimizeFunctionOnNextCall(f8);
}
const v28 = new F4();
new F4(v28, WeakMap);
new F4(F4, F4);
