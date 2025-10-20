function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = [-2.220446049250313e-16,0.31163673597347463,0.3498029026774545];
function F5(a7, a8) {
    if (!new.target) { throw 'must be called with new'; }
    function f9(a10, a11, a12) {
        a11.push(F0);
        a11.matchAll = a10;
        return a10;
    }
    f9(f9, v4);
    %OptimizeFunctionOnNextCall(f9);
}
const v15 = new F5();
const t15 = v15.constructor;
const v17 = new t15();
const t17 = v17.constructor;
new t17();
