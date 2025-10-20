function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v5 = 0; v5 < 5; v5++) {
        this[28953];
    }
}
function f9() {
    const v10 = [40488,4,-1709576870,3,12,-262369725,65537,14,47563909];
    function F12(a14, a15, a16, a17) {
        if (!new.target) { throw 'must be called with new'; }
        a16[8] = F12;
        function f18() {
            return f18;
        }
        try {
            const v20 = new a16(102);
            function f21() {
                return 102;
            }
            Object.defineProperty(v20, "toString", { configurable: true, value: f21 });
            v20[31] = v20;
        } catch(e22) {
        }
        function f23(a24) {
            return F0;
        }
        Object.defineProperty(v10, "b", { configurable: true, enumerable: true, get: f18, set: f23 });
    }
    const v25 = new F12(Object, Uint32Array, Uint32Array);
    const t29 = v25.constructor;
    new t29(v10, v25, F0);
    const v28 = new F12(v10, v10, v10);
    const t32 = v28.constructor;
    new t32(v10, Intl, Intl);
    return v28;
}
f9();
%PrepareFunctionForOptimization(f9);
%OptimizeFunctionOnNextCall(f9);
f9();
