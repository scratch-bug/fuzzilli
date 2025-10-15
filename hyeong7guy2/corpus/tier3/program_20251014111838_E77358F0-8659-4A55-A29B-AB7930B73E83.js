function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        const v10 = [-11];
        function F11(a13, a14, a15, a16) {
            if (!new.target) { throw 'must be called with new'; }
        }
        `1784625868${this}n${F0}Una`;
        const v18 = new F11();
        const v19 = v18.constructor;
        new v19(v18, v10);
        return v19;
    }
    f6(f6, a5, F0);
    %OptimizeFunctionOnNextCall(f6);
}
const v22 = new F2();
new F2(v22, F2);
new F2(v22, F0);
