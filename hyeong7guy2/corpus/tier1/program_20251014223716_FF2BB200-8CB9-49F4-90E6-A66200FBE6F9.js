const v1 = new Set();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        for (let v10 = 0; v10 < 5; v10++) {
            [a7] = v1;
        }
        return F2;
    }
    f6(F2, this, v1);
    %OptimizeFunctionOnNextCall(f6);
}
const v12 = new F2(v1, v1);
const v13 = new F2(v12, v12);
const t14 = v13.constructor;
new t14();
