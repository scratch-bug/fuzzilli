class C0 {
}
function f1(a2, a3) {
    function F4(a6) {
        if (!new.target) { throw 'must be called with new'; }
    }
    const v7 = class extends F4 {
        constructor(a9, a10) {
            function f11(a12, a13) {
                const v14 = a13 | a13;
                function F16(a18, a19) {
                    if (!new.target) { throw 'must be called with new'; }
                    function f20(a21, a22, a23) {
                        return a21;
                    }
                    f20 > a13;
                    f20(a13, arguments);
                }
                new F16(F16, v14);
                return a10;
            }
            f11();
            %PrepareFunctionForOptimization(f11);
            %OptimizeMaglevOnNextCall(f11);
            f11();
        }
    }
    new v7(f1, f1);
}
C0.constructor = f1;
const v30 = C0.constructor;
try { v30(); } catch (e) {}
