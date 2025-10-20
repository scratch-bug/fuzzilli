class C1 extends WeakSet {
}
class C2 extends C1 {
}
function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = class extends F3 {
    constructor(a8, a9) {
        super();
        function f10(a11, a12) {
            const v13 = a12 | a12;
            function F15(a17, a18) {
                if (!new.target) { throw 'must be called with new'; }
                function f19(a20, a21, a22) {
                    Uint8ClampedArray[7] += C2;
                }
                f19(a12, arguments);
            }
            const v25 = new F15();
            const t20 = v25.constructor;
            new t20(v13);
            return a11;
        }
        f10();
        %PrepareFunctionForOptimization(f10);
        %OptimizeMaglevOnNextCall(f10);
        f10();
    }
}
new v6(C2, C1);
