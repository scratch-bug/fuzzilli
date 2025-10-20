function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7, a8, a9) {
        const v11 = Object(a5);
        v11.f = v11;
        return Object;
    }
    f6();
    %OptimizeFunctionOnNextCall(f6);
}
const v13 = new F2();
const t11 = v13.constructor;
new t11(Array, "object");
const t13 = v13.constructor;
new t13();
