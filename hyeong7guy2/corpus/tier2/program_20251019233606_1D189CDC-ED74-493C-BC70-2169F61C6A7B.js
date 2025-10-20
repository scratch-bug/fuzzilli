class C2 extends WeakSet {
}
class C3 extends C2 {
}
function F4(a6) {
    if (!new.target) { throw 'must be called with new'; }
}
const v7 = class extends F4 {
    constructor(a9, a10) {
        super();
        function f11(a12, a13) {
            const v14 = a13 | a13;
            function F16(a18, a19) {
                if (!new.target) { throw 'must be called with new'; }
                a19 | a19;
                function f21(a22, a23, a24) {
                    const v27 = new Uint8ClampedArray(956);
                    v27[10] /= C3;
                }
                f21(a13, arguments);
            }
            const v29 = new F16();
            const t22 = v29.constructor;
            new t22(v14, -862548315n);
        }
        f11();
        %PrepareFunctionForOptimization(f11);
        %OptimizeMaglevOnNextCall(f11);
        f11();
    }
}
new v7(WeakSet, -862548315n);
